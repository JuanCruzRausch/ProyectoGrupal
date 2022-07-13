const Transaction = require('../models/Transaction');
const CommonUser = require('../models/CommonUser');
const Seller = require('../models/Seller');
const PublicationTest = require('../models/PublicationTest');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const axios = require('axios');
const mongoose = require('mongoose');

const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;

exports.createOrder = async (req, res, next) => {
  try {
    const { cartItem, shippingAddress } = req.body;
    const { id } = req.params;

    let itemsPaypal = [];
    for (let item of cartItem) {
      let itemObj = {
        id: item.product,
        name: item.title,
        description: item.title,
        sku: item.stock.stockTotal.toString(),
        unit_amount: {
          currency_code: 'USD',
          value: item.price.toString(),
        },
        tax: {
          currency_code: 'USD',
          value: '0',
        },
        quantity: item.quantity.toString(),
        category: 'PHYSICAL_GOODS',
      };
      itemsPaypal.push(itemObj);
    }
    let total_value = 0;
    for (let itemV of cartItem) {
      total_value = total_value + itemV.price * itemV.quantity;
    }
    //Orden de compra que recibe Paypal
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: id,
          description: 'Orden de Pago MercadoEnanos',
          custom_id: 'CUST-MercadoEnanos',
          soft_descriptor: 'MercadoEnanos',
          amount: {
            currency_code: 'USD',
            value: total_value.toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: total_value.toString(),
              },
              shipping: {
                currency_code: 'USD',
                value: '0.00',
              },
              handling: {
                currency_code: 'USD',
                value: '0.00',
              },
              tax_total: {
                currency_code: 'USD',
                value: '0.00',
              },
              shipping_discount: {
                currency_code: 'USD',
                value: '0.00',
              },
            },
          },
          items: itemsPaypal,
          shipping: {
            method: 'Delivery',
            address: {
              name: {
                full_name: shippingAddress.fullname,
                surname: shippingAddress.fullname,
              },
              address_line_1: shippingAddress.address,
              address_line_2: '-',
              admin_area_2: shippingAddress.city,
              admin_area_1: shippingAddress.country,
              postal_code: shippingAddress.postalCode,
              country_code: 'AR',
            },
          },
        },
      ],
      application_context: {
        brand_name: 'MercadoEnanitos',
        landing_page: 'LOGIN',
        user_action: 'PAY_NOW',
        return_url: 'http://localhost:3000/transaction',
        cancel_url: 'http://localhost:5050/payment/cancel-order',
      },
    };

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    //Genero el access token
    const {
      data: { access_token },
    } = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/oauth2/token',
      params,
      {
        headers: {
          Content_Type: 'application/x-www-form-urlencoded',
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    // se manda info a paypal
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    //--guardar en commonuser la orden compra
    let products = [];
    cartItem.map((el) =>
      products.push({
        publicationId: el.product,
        quantity: el.quantity,
      })
    );

    let user = await CommonUser.findByIdAndUpdate(id, {
      purchase_order: {
        products: products,
        link: response.data.links[1].href,
      },
    });

    res.json(response.data.links[1].href); //-- devuelvo el link de pago
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.captureOrder = async (req, res, next) => {
  try {
    const { token } = req.query;

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    const buyer_id = response.data.purchase_units[0].reference_id;

    const buyer = await CommonUser.findOne({ _id: buyer_id });
    const publications = buyer.purchase_order.products.map((e) => e);
    const pubs = [];

    for (let i = 0; i < publications.length; i++) {
      pubs.push(await PublicationTest.findById(publications[i].publicationId));
    }

    const purchase_units = pubs.map((e, i) => {
      return {
        seller: e.seller,
        quantity: publications[i].quantity,
        status: 'pending',
        publication: pubs[i]._id,
        earnings: {
          total_money: e.price * publications[i].quantity,
          seller_earnings: e.earnings * publications[i].quantity,
          platform_earnings:
            e.price * publications[i].quantity -
            publications[i].quantity * e.earnings,
        },
      };
    });

    for (let i = 0; i < purchase_units.length; i++) {
      const newTransaction = await Transaction.create({
        transaction: purchase_units[i],
        buyer: buyer._id,
      });
      await CommonUser.findByIdAndUpdate(
        { _id: buyer._id },
        {
          $push: {
            purchase_history: [newTransaction._id],
          },
        },
        { new: true }
      );
      const seller = await Seller.findById(purchase_units[i].seller);
      const queDevolves = await Seller.findByIdAndUpdate(
         purchase_units[i].seller,
        {
          transactionsTotal: {
            ...seller.transactionsTotal,
            transactionHistory: [
              ...seller.transactionsTotal.transactionHistory,
              newTransaction._id,
            ],
            total: seller.transactionsTotal.total + 1
          },
        },
        { new: true }
      );
      console.log('\n', queDevolves);
      const publi = await PublicationTest.findOne({
        _id: purchase_units[i].publication,
      });
      publi.stock.stockTotal-=purchase_units[i].quantity;
      publi.save();
    }

    await CommonUser.updateOne(
      { _id: buyer_id },
      {
        purchase_order: {
          products: [],
          link: '',
        },
      }
    );

    //purchase_history: buyer.purchase_history.concat({publication_id: new mongoose.mongo.ObjectId(newTransaction._id)})
    res.status(200).json({ status: 'success', data: 'success' });
  } catch (error) {
    console.log(error);
    next(new AppError(error));
  }
};

exports.toCanceled = catchAsync(async (req, res, next) => {
  let { id } = req.params;

  const transaction = await Transaction.findById(id);

  if (!transaction) {
    return next(new AppError('There is no transaction with that id', 404));
  }

  const trans = await Transaction.findByIdAndUpdate(
    id,
    { transaction: { ...transaction.transaction, status: 'rejected' } },
    { new: true }
  );

  const publication = await PublicationTest.findById(
    transaction.transaction.publication
  );

  const seller = await Seller.findById(transaction.transaction.seller);

  if (!publication) {
    return next(new AppError('there is no publication with that id', 404));
  }
  if (!seller) {
    return next(new AppError('there is no seller with that id', 404));
  }

  const pub = await PublicationTest.findByIdAndUpdate(
    transaction.transaction.publication,
    {
      stock: {
        ...publication.stock,
        stockTotal:
          publication.stock.stockTotal + transaction.transaction.quantity,
      },
    },
    { new: true }
  );

  const sel = await Seller.findByIdAndUpdate(
    transaction.transaction.seller,
    {
      transactionsTotal: {
        ...seller.transactionsTotal,
        canceled: seller.transactionsTotal.canceled + 1,
      },
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      transaction: trans,
    },
  });
});

exports.toFulfilled = catchAsync(async (req, res, next) => {
  let { id } = req.params;

  let transaction = await Transaction.findById(id);

  if (!transaction) {
    return next(new AppError('There are no transaction with that id', 404));
  }

  const trans = await Transaction.findByIdAndUpdate(
    id,
    { transaction: { ...transaction.transaction, status: 'fulfilled' } },
    { new: true }
  );

  const publication = await PublicationTest.findById(
    transaction.transaction.publication
  );

  const seller = await Seller.findById(transaction.transaction.seller);

  if (!publication) {
    return next(new AppError('there is no publication with that id', 404));
  }
  if (!seller) {
    return next(new AppError('there is no seller with that id', 404));
  }

  const pub = await PublicationTest.findByIdAndUpdate(
    transaction.transaction.publication,
    {
      totalSold: publication.totalSold + transaction.transaction.quantity,
    },
    { new: true }
  );

  let active = [];
  let inactive = [];

  if (pub.status) {
    active = seller.active_pub;
    inactive = seller.inactive_pub;
  } else {
    active = seller.active_pub.filter((e) => e + '' !== pub._id + '');
    inactive = [...seller.inactive_pub, pub._id];
  }

  const sel = await Seller.findByIdAndUpdate(
    transaction.transaction.seller,
    {
      total_earnings:
        seller.total_earnings +
        transaction.transaction.earnings.seller_earnings,
      transactionsTotal: {
        ...seller.transactionsTotal,
        completed: seller.transactionsTotal.completed + 1,
      },
      active_pub: [...active],
      inactive_pub: [...inactive],
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      transaction: trans,
    },
  });
});

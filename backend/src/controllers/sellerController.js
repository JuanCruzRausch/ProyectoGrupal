const Seller = require('../models/Seller');
const CommonUser = require('../models/CommonUser');
const PublicationTest = require('../models/PublicationTest');
const DeletedPublication = require('../models/DeletedPublication');
const Transaction = require('../models/Transaction');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllSellers =  async(req, res, next) => {
  try {
    const listSellers = await Seller.find({})
    res.status(200).json({
      status: 'success',
      data: listSellers
    })
  } catch (error) {
    next(new AppError(error))
  }
}


exports.post = catchAsync(async (req, res, next) => {
  let userFind = await CommonUser.findOne({ _id: req.body.user });
  if (userFind.authorization.roles.includes('seller')) {
    return next(new AppError('The user is already logged as a Seller', 400));
  }

  const newSeller = await Seller.create({
    user: req.body.user,
    brand: req.body.brand,
    social_net: {
      ig: req.body.social_net?.ig,
      fb: req.body.social_net?.fb,
      tw: req.body.social_net?.tw,
    },
    subsidiary: {
      google_map: req.body.subsidiary?.google_map,
      province: req.body.subsidiary?.province,
      city: req.body.subsidiary?.city,
      postalCode: req.body.subsidiary?.postalCode,
      street: req.body.subsidiary?.street,
      number: req.body.subsidiary?.number,
      reference: req.body.subsidiary?.reference,
    },
  });
  res.status(201).json({ status: 'success', data: newSeller });
  next();
});

exports.patch = catchAsync(async (req, res, next) => {
  const { _id, brand, social_net, subsidiary } = req.body;
  const { ig, fb, tw } = social_net;
  const { google_map, province, city, postalCode, street, number, reference } =
    subsidiary;

  const updatedSeller = await Seller.findByIdAndUpdate(
    { _id: _id },
    {
      brand,
      social_net,
      subsidiary,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedSeller) {
    return next(new AppError('No seller was found', 404));
  }
  // const sellerUpdated = await Seller.findOne({user})

  res.status(200).json({ status: 'success', data: updatedSeller });
});

exports.getSeller = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const seller = await Seller.findOne({ user: id })
    .populate('active_pub')
    .populate('inactive_pub')
    .populate('reputation')
    .populate('transactionsTotal')
    .populate('non_answered')
    .populate('answered')
    .populate('user');

  if (!seller) {
    return next(new AppError('No seller was found with the id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      seller,
    },
  });
});

exports.postAndDeletePublication = catchAsync(async (req, res, next) => {
  let deletedPub = await PublicationTest.findById(req.params.idpub);
  if (!deletedPub) {
    return next(new AppError('There is no publication with that id', 404));
  }
  let seller = await Seller.findOne({ user: req.params.iduser });
  if (!seller) {
    return next(new AppError('There is no seller with that id', 404));
  }
  let sellerpub = deletedPub.seller + '';
  let sellerid = seller._id + '';
  console.log(deletedPub);
  if (sellerpub !== sellerid) {
    return next(new AppError('The publication does not to the user', 400));
  }
  console.log({ ...deletedPub._doc });
  const newDeletedPub = await DeletedPublication.create({ ...deletedPub._doc });

  let indice = seller.active_pub.indexOf(deletedPub);
  let indiceIn = seller.inactive_pub.indexOf(deletedPub);
  await Seller.findByIdAndUpdate(seller._id, {
    active_pub: seller.active_pub.splice(indice, 1),
    inactive_pub: seller.inactive_pub.splice(indiceIn, 1),
  });
  await PublicationTest.findByIdAndDelete(req.params.idpub);
  res.status(200).json({
    status: 'success',
    data: { newDeletedPub },
  });
});

exports.passtoInactive = catchAsync(async (req, res, next) => {
  const { idpub, iduser } = req.params;

  let pub = await PublicationTest.findOne({ _id: idpub });
  let sel = await Seller.findOne({ user: iduser });

  let active = sel.active_pub.filter((el) => el + '' !== idpub);
  console.log(active);
  let seller = await Seller.findOneAndUpdate(
    { user: iduser },
    {
      active_pub: [...active],
      inactive_pub: [...sel.inactive_pub, pub._id],
    },
    { new: true }
  );
  console.log('seller updated');
  let publication = await PublicationTest.findOneAndUpdate(
    { _id: idpub },
    { status: false }
  );

  res.status(200).json({
    status: 'success',
    data: { seller },
  });
});

exports.reactivate = catchAsync(async (req, res, next) => {
  const { idpub, iduser } = req.params;

  let pub = await PublicationTest.findOne({ _id: idpub });
  let sel = await Seller.findOne({ user: iduser });

  let inactive = sel.inactive_pub.filter((el) => el + '' !== idpub);
  console.log(inactive);
  let seller = await Seller.findOneAndUpdate(
    { user: iduser },
    {
      active_pub: [...sel.active_pub, pub._id],
      inactive_pub: [...inactive],
    },
    { new: true }
  );
  console.log('seller updated');
  let publication = await PublicationTest.findOneAndUpdate(
    { _id: idpub },
    { status: true }
  );

  res.status(200).json({
    status: 'success',
    data: { seller },
  });
});

exports.getTransactionSeller = catchAsync(async(req,res,next)=>{
  try {
      const {id} = req.params
      const transactionsSeller = await Seller.findOne({_id: id})
      const transaction = await Transaction.find().where('_id').in(transactionsSeller.transactionsTotal.transactionHistory)
    .populate({
      path:'buyer',
      model: 'CommonUser',
      select: 'name'
    })
    .populate({
      path:'transaction.publication',
      model: 'PublicationTest',
      select: 'price picture title'
    })
      res.status(201).json({
          status:'success',
          data:{
            transaction
          }
      });
      res.status(201).json({
          status:'success',
          data:{
              transaction
          }
      });
  } catch (error) {
      console.log(error);
      next(new AppError(error));
  }
})


exports.getTransactionsSellerLastMonth = async(req, res, next) => {
  try{
    const {id} = req.params
    const transactionsSeller = await Seller.findOne({_id: id})
    const transaction = await Transaction.find({}, 'dateOfBuy transaction.quantity transaction.status').where('_id').in(transactionsSeller.transactionsTotal.transactionHistory)
    const sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    transaction.filter(e =>  e.dateOfBuy.getMonth() === new Date(Date.now()).getMonth() && e.transaction.status === 'fulfilled' ).forEach((e,i) => {
      sales[e.dateOfBuy.getDate()] = sales[e.dateOfBuy.getDate()]? (sales[e.dateOfBuy.getDate()] + e.transaction.quantity) : e.transaction.quantity
    })

    res.status(200).json({
      status: 'success',
      data: sales
    })  
  }catch(error){
   next(new AppError(error))
  }
}

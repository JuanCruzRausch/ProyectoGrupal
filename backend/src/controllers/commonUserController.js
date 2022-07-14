const CommonUser = require('../models/CommonUser');
const Transaction = require('../models/Transaction');
const Seller = require('../models/Seller');
const Rol = require('../models/Roles');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { getAccessTokenAdmin, apiAuth0 } = require('../utils/apiAdminAuth0');
const apiFeatures = require('../utils/apiFeatures');


exports.post = catchAsync(async (req, res, next) => {
  const newUser = await CommonUser.create({
    _id: req.body._id,
    name: req.body.name,
    last_name: req.body.last_name,
    password: req.body.password,
    country: req.body.country,
    email: req.body.email,
    role: req.body.role,
    address: {
      province: req.body.address.province,
      city: req.body.address.city,
      postalcode: req.body.address.postalcode,
      street: req.body.address.street,
      number: req.body.address.number,
      dpto: {
        floor: req.body.address.dpto.floor,
        number: req.body.address.dpto.number,
      },
      ref: req.body.address.ref,
    },
    phone: req.body.phone,
    credit_card: req.body.credit_card,
    photo: req.body.photo,
  });
  res.status(201).json({ status: 'success', data: newUser });
  next();
});

exports.updateToUser = async (req, res, next) => {
  try {
    const { _id, name, nickname, country, address, phone, credit_card, photo } =
      req.body;
      console.log(address)
    const lastname = req.body.last_name;
    await CommonUser.updateOne(
      { _id: _id },
      {
        name,
        lastname,
        nickname,
        country,
        address,
        phone,
        credit_card,
        photo,
      }
    );

    //Asignación de rol a Buyer
    const user = await CommonUser.findOne({_id})
    const token = await getAccessTokenAdmin()
    const rol_id = await Rol.findOne({name: 'Buyer'})
    await apiAuth0.assingRolesToAUser(token.data.access_token, user.user_id, {"roles": [rol_id.rol_id]})

    //Asignación de rol a Buyer en la DB
    user.authorization.roles.includes('buyer')?null:user.authorization.roles.push('buyer');
    user.save();

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.log(error)
    return next(new AppError('bad request', 400));
  }
};

exports.getUserEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await CommonUser.findOne({ email });
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    return next(new AppError('bad request', 400));
  }
};

exports.toSeller = catchAsync(async (req, res, next) => {

  // if (!userToSeller) {
  //   return next(new AppError('No user found to update with that ID', 404));
  // }

  // Asignacion de rol seller
  const user = await CommonUser.findOne({_id: req.params.id})
  const token = await getAccessTokenAdmin()
  const rol_id = await Rol.findOne({name: 'Seller'})
  await apiAuth0.assingRolesToAUser(token.data.access_token, user.user_id, {"roles": [rol_id.rol_id]})
  
  //Asignación de rol seller en la DB
  user.authorization.roles.includes('seller')?null:user.authorization.roles.push('seller');
  user.save(); 

  res.status(200).json({
    status: 'success',
    data: {
      user: user,
    },
  });
});

exports.blockUser = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { block } = req.query;
    console.log(block);
    const value = block === 'true' ? true : false;
    const token = await getAccessTokenAdmin();
    await apiAuth0.blockUser(token.data.access_token, id, value);
    const user = await CommonUser.findOneAndUpdate(
      { user_id: id },
      { blocked: value },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.log(error.response);
    next(new AppError(error));
  }
});

exports.getPurchasesUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const transactionsUser = await CommonUser.findOne({ _id: id });
  const transaction = await Transaction.find()
    .where('_id')
    .in(transactionsUser.purchase_history)
    .populate({
      path: 'transaction.seller',
      model: 'Seller',
      select: 'brand',
    })
    .populate({
      path: 'transaction.publication',
      model: 'PublicationTest',
      select: 'price picture title',
    });
  res.status(201).json({
    status: 'success',
    data: {
      transaction,
    },
  });
});

exports.getUserPerName = catchAsync(async (req, res, next) => {
  const { name } = req.query;

  const users = await CommonUser.find({
    name: { $regex: name, $options: 'i' },
  });

  if (users.length <= 0) {
    return next(new AppError('There are no users with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: users,
  });
});

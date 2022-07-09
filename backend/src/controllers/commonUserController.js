const CommonUser = require('../models/CommonUser');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { getAccessTokenAdmin, apiAuth0 } = require('../utils/apiAdminAuth0');

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
    const lastname = req.body.last_name;
    const userUpdated = await CommonUser.updateOne(
      { _id: _id },
      { name, lastname, nickname, country, address, phone, credit_card, photo }
    );
    console.log(userUpdated);
    const user = await CommonUser.findOne({ _id });
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
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
  const userToSeller = await CommonUser.findByIdAndUpdate(
    req.params.id,
    { authorization: { roles: ['seller'] } },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!userToSeller) {
    return next(new AppError('No user found to update with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: userToSeller,
    },
  });
});

exports.blockUser = catchAsync(async (req, res, next) => {
  
  try {
    const { id } = req.params
    const { block } = req.query
    const token = await getAccessTokenAdmin()
    await apiAuth0.blockUser(token.data.access_token, id, block)
    res.status(200).json({
      status: 'success',
      data: `usuario ${id} bloqueado`
    })
  } catch (error) {
    next(new AppError(error))
  }
})
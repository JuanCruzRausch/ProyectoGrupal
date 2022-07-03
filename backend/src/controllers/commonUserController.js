const CommonUser = require('../models/CommonUser');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async (req, res, next) => {
  const newUser = await CommonUser.create({
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
  console.log(req.body)
  try {
    const {
      _id,
      name,
      last_name,
      nickname,
      country,
      address,
      phone,
      credit_card,
      photo,
    } = req.body;
    const userUpdated = await CommonUser.updateOne(
      
      { name, last_name, nickname, country, address, phone, credit_card, photo, _id }
    );
    res.status(200).json({
        status: 'success',
        data: userUpdated
    })
  } catch (error) {
    return next(new AppError('bad request', 400))
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

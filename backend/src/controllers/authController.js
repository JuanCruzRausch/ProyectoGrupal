const User = require('../models/User');
const axios = require('axios');

exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      photo: req.body.photo,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      address: req.body.address,
    });

    return res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: 'fail',
      message: e,
    });
  }
  next();
};

exports.changePassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    await axios.post(
      'https://dev-dzo-bi6q.us.auth0.com/dbconnections/change_password',
      {
        client_id: 'WdVad5B4d483KNuDKngTtCfBnH2ErkIR',
        email: email,
        connection: 'test',
      },
      { header: { 'content-type': 'application/json' } }
    );

    res.status(200).json({
      status: 'success',
      data: `We've just sent you an email to reset your password`
    })
  } catch (error) {
    return next(new AppError('Bad request', 400))
  }
};

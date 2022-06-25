const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const { sendEmail } = require('../utils/nodemailer')

exports.registration = catchAsync(async (req, res, next) => {
  const { name, email, photo, role, password, passwordConfirm, address } =
    req.body;

  const newUser = await User.create({
    name,
    email,
    photo: photo ? photo : 'https://pic.onlinewebfonts.com/svg/img_227642.png',
    role: role ? role : 'user',
    password,
    passwordConfirm,
    address
  });

  if (!newUser) {
    return next(
      new AppError('bad request', 400)
    );
  }

  const textHTML = `
  <h1>Bienvenido ${name}</h1>
  <ul>
      <li>Tú fecha de registro es de ${new Date}</li>
      <li>Tendrás una hora para confirmar el registro</li>
      <li>Accede al siguiente <a href="*">enlace</a> para confirmar tú cuenta</li>
  </ul>
  `

  const response = await sendEmail(email, 'Confirmar cuenta', textHTML)

  if(!response) {
    return next(new AppError('Err email', 400))
  }

  console.log(response)

  res.status(201).json({
    status: 'success',
    data: newUser
  })
});


exports.confirm = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  const updateUser = await User.updateOne({id}, {Account_verification: true})

  if(!updateUser) return next(new AppError('err update', 400))

  res.status(200).json({
    status: 'success',
    data: updateUser
  })
});
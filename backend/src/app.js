// comentando ando
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalerrorHandler = require('./controllers/appErrorController');
const userRouter = require('./routes/userRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const publicationRouter = require('./routes/publicationRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/categories', categoriesRouter);
app.use('/publication', publicationRouter);

app.all('*', (req, res, next) => {
  //
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalerrorHandler);

module.exports = app;

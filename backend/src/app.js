const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalerrorHandler = require('./controllers/appErrorController');
const userRouter = require('./routes/userRouter');
const categoriesTestRouter = require('./routes/categoryTestRouter');
const publicationRouter = require('./routes/publicationRouter');
const commonUserRouter = require('./routes/commonUserRouter');
const subCategoryRouter = require('./routes/subCategoryRouter');
const sellerRouter = require('./routes/sellerRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
app.use('/categories', categoriesTestRouter);
app.use('/subcategory', subCategoryRouter);
app.use('/seller', sellerRouter);
app.use('/commonuser', commonUserRouter);
app.use('/users', userRouter);
app.use('/publication', publicationRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalerrorHandler);

module.exports = app;

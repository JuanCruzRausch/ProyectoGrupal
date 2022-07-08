const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalerrorHandler = require('./controllers/appErrorController');
const categoriesTestRouter = require('./routes/categoryTestRouter');
const commonUserRouter = require('./routes/commonUserRouter');
const subCategoryRouter = require('./routes/subCategoryRouter');
const sellerRouter = require('./routes/sellerRouter');
const publicationTestRouter = require('./routes/publicationTestRouter');
const qandaRouter = require('./routes/qandaRouter');
const transactionsRouter = require('./routes/transactionsRouter');
const deletedPublicationRouter = require('./routes/deletedPublicationRouter');
const deleteUserRouter = require('./routes/deleteUserRouter');
const paymentRouter = require('./routes/paymentRouter');
const uploadImageRouter = require('./routes/uploadImageRouter');
const dotenv = require('dotenv');
const cors = require('cors');
const {authorizeAccessToken} = require('./utils/authorizeAccessToken')
dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});

// Routes
app.use('/categories', categoriesTestRouter);
app.use('/subcategory', subCategoryRouter);
app.use('/seller', sellerRouter);
app.use('/commonuser', commonUserRouter);
app.use('/publicationtest', publicationTestRouter);
app.use('/qanda', qandaRouter);
app.use('/transactions', transactionsRouter);
app.use('/deleteuser', deleteUserRouter);
app.use('/deletedpublication', deletedPublicationRouter);
app.use('/payment', paymentRouter);
app.use('/upload-image', uploadImageRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalerrorHandler);

module.exports = app;

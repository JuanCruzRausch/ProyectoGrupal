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
const statsRouter = require('./routes/statsRouter')
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: "./.env" });
const path=require('path');

const {authorizeAccessToken} = require('./utils/authorizeAccessToken')
const {roles} = require('./utils/roles')
const {getAccessTokenAdmin, apiAuth0} = require('./utils/apiAdminAuth0');
const reputationRouter = require('./routes/reputationRouter');



const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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
app.use('/stats', statsRouter)
app.use('/reputation', reputationRouter)

//Es de ejemplo, 
app.get('/apiAuth0', authorizeAccessToken, roles.admin, async(req, res, next) => {
  try {
    const token = await getAccessTokenAdmin()
    console.log(token.data.access_token)
    const response = await apiAuth0.assingRolesToAUser(token.data.access_token, "google-oauth2|113524192845578480045", {"roles":["rol_okNnus6dt6Itz5Xa"]}) // perdon Javi por usarte xD
    res.send(response)
  } catch (error) {
    res.status(400).json({error:error.message})
  }  
    
})


app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalerrorHandler);

module.exports = app;

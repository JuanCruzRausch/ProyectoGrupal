const {Router} = require('express');
const paymentController = require('../controllers/paymentController');

const paymentRouter = Router();

paymentRouter.post('/create-order', paymentController.createOrder); 
paymentRouter.get('/capture-order', paymentController.captureOrder); 
paymentRouter.get('/cancel-order', paymentController.cancelOrder); 

module.exports = paymentRouter;
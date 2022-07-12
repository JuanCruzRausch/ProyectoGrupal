const { Router } = require('express');
const paymentController = require('../controllers/paymentController');

const paymentRouter = Router();

paymentRouter.post('/create-order/:id', paymentController.createOrder);
paymentRouter.get('/capture-order', paymentController.captureOrder);
paymentRouter.patch('/purchase-canceled/:id', paymentController.toCanceled);
paymentRouter.patch('/purchase-arrived/:id', paymentController.toFulfilled);

module.exports = paymentRouter;

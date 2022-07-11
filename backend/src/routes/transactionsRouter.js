const { Router } = require('express');
const transactionController = require('../controllers/transactionsController');
const transactionsRouter = Router();

transactionsRouter.post('/', transactionController.postTransaction);

module.exports = transactionsRouter;
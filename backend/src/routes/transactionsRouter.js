const { Router } = require('express');
const postTransactionController = require('../controllers/transactionsController');
const transactionsRouter = Router();

transactionsRouter.post('/', postTransactionController.postTransaction);

module.exports = transactionsRouter;
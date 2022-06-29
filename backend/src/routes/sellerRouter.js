const { Router } = require('express');
const sellerController = require('../controllers/sellerController')

const sellerRouter = Router();

sellerRouter.post('/', sellerController.post)

module.exports = sellerRouter;
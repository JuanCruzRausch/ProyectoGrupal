const { Router } = require('express');
const sellerController = require('../controllers/sellerController')

const sellerRouter = Router();

sellerRouter.post('/', sellerController.post)
sellerRouter.patch('/',sellerController.patch)
module.exports = sellerRouter;
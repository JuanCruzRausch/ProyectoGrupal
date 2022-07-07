const { Router } = require('express');
const sellerController = require('../controllers/sellerController')

const sellerRouter = Router();

sellerRouter.post('/', sellerController.post)
sellerRouter.patch('/',sellerController.patch)
sellerRouter.get('/:id',sellerController.getSeller)
sellerRouter.patch('/:id',sellerController.updateActivePubs);

module.exports = sellerRouter;
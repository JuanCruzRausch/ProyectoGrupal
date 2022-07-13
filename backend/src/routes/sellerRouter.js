const { Router } = require('express');
const sellerController = require('../controllers/sellerController');
const {authorizeAccessToken} = require('../utils/authorizeAccessToken')
const {roles} = require('../utils/roles')

const sellerRouter = Router();

sellerRouter
  .route('/')
  .post(sellerController.post)
  .patch(sellerController.patch);
sellerRouter
  .route('/:id')
  .get(sellerController.getSeller)
sellerRouter
  .route('/getAll', authorizeAccessToken, roles.admin, sellerController.getAllSellers)
sellerRouter
  .route('/:idpub/:iduser')
  .post(sellerController.postAndDeletePublication)
  .patch(sellerController.passtoInactive)
  .put(sellerController.reactivate);
sellerRouter.route('/transactions-seller/:id').get(sellerController.getTransactionSeller);
sellerRouter.route('/stats/:id').get(sellerController.getSalesLastMonth);

module.exports = sellerRouter;

const { Router } = require('express');
const sellerController = require('../controllers/sellerController');

const sellerRouter = Router();

sellerRouter
  .route('/')
  .post(sellerController.post)
  .patch(sellerController.patch);
sellerRouter
  .route('/:id')
  .get(sellerController.getSeller)
  .patch(sellerController.updateActivePubs);

sellerRouter
  .route('/:idpub/:iduser')
  .post(sellerController.postAndDeletePublication)
  .patch(sellerController.passtoInactive)
  .put(sellerController.reactivate);

module.exports = sellerRouter;

const { Router } = require('express');
const deletedPublicationController = require('../controllers/deletedPublicationController');

const deletedPublicationRouter = Router();

deletedPublicationRouter.get(
  '/',
  deletedPublicationController.getAllDeletedPublication
);
deletedPublicationRouter.post(
  '/:id',
  deletedPublicationController.postDeletedPublication
);

module.exports = deletedPublicationRouter;

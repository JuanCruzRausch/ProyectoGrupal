const { Router } = require('express');
const deletedPublicationController = require('../controllers/deletedPublicationController');

const deletedPublicationRouter = Router();

deletedPublicationRouter.post(
  '/:id',
  deletedPublicationController.postDeletedPublication
);

module.exports = deletedPublicationRouter;

const { Router } = require('express');
const publicationController = require('../controllers/publicationController');

const publicationRouter = Router();

publicationRouter
  .route('/')
  .get(publicationController.getAllPublications)
  .post(publicationController.post);

publicationRouter
  .route('/idArray')
  .get(publicationController.getPublicationidArray)
  
publicationRouter
  .route('/:id')
  .get(publicationController.getPublicationID)


module.exports = publicationRouter;

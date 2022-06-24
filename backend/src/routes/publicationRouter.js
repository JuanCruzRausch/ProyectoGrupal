const { Router } = require('express');
const publicationController = require('../controllers/publicationController');

const publicationRouter = Router();

publicationRouter
  .route('/')
  .get(publicationController.getAllPublications)
  .post(publicationController.post);

module.exports = publicationRouter;

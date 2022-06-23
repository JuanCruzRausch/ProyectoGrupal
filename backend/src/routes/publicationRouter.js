const { Router } = require('express');
const publicationController = require('../controllers/publicationController');

const publicationRouter = Router();

publicationRouter.post('/', publicationController.post);
publicationRouter.get('/', publicationController.getAllPublications);

module.exports = publicationRouter;

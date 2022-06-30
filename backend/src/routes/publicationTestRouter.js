const { Router } = require('express');
const publicationTestController = require('../controllers/publicationTestController');

const publicationTestRouter = Router();

publicationTestRouter.post('/', publicationTestController.postPublicationTest);

module.exports = publicationTestRouter;

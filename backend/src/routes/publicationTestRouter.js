const { Router } = require('express');
const publicationTestController = require('../controllers/publicationTestController');

const publicationTestRouter = Router();

publicationTestRouter.post('/', publicationTestController.postPublicationTest);
publicationTestRouter.delete('/:id', publicationTestController.deletePublicationTest);
publicationTestRouter.get('/', publicationTestController.getAllPublicationTest);
publicationTestRouter.get('/:id', publicationTestController.getPublicationTestID);
module.exports = publicationTestRouter;

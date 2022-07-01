const { Router } = require('express');
const publicationTestController = require('../controllers/publicationTestController');

const publicationTestRouter = Router();

publicationTestRouter.post('/', publicationTestController.postPublicationTest);
publicationTestRouter.delete('/:id',publicationTestController.deletePublicationTest);
module.exports = publicationTestRouter;

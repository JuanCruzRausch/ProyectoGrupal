const { Router } = require('express');
const upload = require('../../multer');
const publicationTestController = require('../controllers/publicationTestController');

const publicationTestRouter = Router();

publicationTestRouter
  .route('/:id')
  .post(publicationTestController.postPublicationTest)
  .delete(publicationTestController.deletePublicationTest);
publicationTestRouter.get('/', publicationTestController.getAllPublicationTest);
publicationTestRouter.get(
  '/byName/:title',
  publicationTestController.getPublicationByName
);
publicationTestRouter.get(
  '/:id',
  publicationTestController.getPublicationTestID
);
publicationTestRouter.post(
  '/upload-image',
  upload.array('image'),
  publicationTestController.postImages
);
publicationTestRouter.get(
  '/sellerpublications/:id',
  publicationTestController.getProductsBySeller
);
module.exports = publicationTestRouter;

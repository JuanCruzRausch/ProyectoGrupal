const { Router } = require('express');
const publicationTestController = require('../controllers/publicationTestController');

const publicationTestRouter = Router();

publicationTestRouter.get('/', publicationTestController.getAllPublicationTest);
publicationTestRouter
  .route('/:id')
  .post(publicationTestController.postPublicationTest)
  .delete(publicationTestController.deletePublicationTest)
  .get(publicationTestController.getPublicationTestID);
publicationTestRouter.get(
  '/byName/:title',
  publicationTestController.getPublicationByName
);
publicationTestRouter
  .route('/admin')
  .get(publicationTestController.getAllPublicationForAdmin);
// publicationTestRouter.post(
//   '/upload-image',
//   upload.array('image'),
//   publicationTestController.postImages
// );
publicationTestRouter.get(
  '/sellerpublications/:id',
  publicationTestController.getProductsBySeller
);
module.exports = publicationTestRouter;

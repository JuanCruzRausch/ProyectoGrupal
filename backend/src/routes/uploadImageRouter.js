const { Router } = require('express');
const uploadImageController = require('../controllers/uploadImageController')
const upload = require('../../multer');

const uploadImageRouter = Router();

uploadImageRouter.post('/', upload.array('image'),  uploadImageController.postImages)

module.exports = uploadImageRouter;
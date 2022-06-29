const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');

const subCategoryRouter = express.Router();

subCategoryRouter.post('/', subCategoryController.postSubCategory);

module.exports = subCategoryRouter;

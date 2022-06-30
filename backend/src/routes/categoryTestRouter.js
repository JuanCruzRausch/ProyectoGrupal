const express = require("express");
const categoryTestController = require("../controllers/categoryTestController");

const categoryTestRouter = express.Router();

categoryTestRouter.post('/', categoryTestController.post);
categoryTestRouter.get('/', categoryTestController.getAllCategoryTest)

module.exports = categoryTestRouter;
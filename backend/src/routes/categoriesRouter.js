const express = require("express");
const categoryController = require("../controllers/categoryController");

const categoriesRouter = express.Router();

categoriesRouter.get('/categoriesInDB', categoryController.getCategories);


module.exports = categoriesRouter;

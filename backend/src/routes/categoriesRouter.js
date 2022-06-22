const express = require("express");
const authController = require("../controllers/authController");

const categoriesRouter = express.Router();

categoriesRouter.get('/categoriesInDB', authController.getCategories);
// el middleware de categories en el mismo archivo que el middleware de user??

module.exports = categoriesRouter;

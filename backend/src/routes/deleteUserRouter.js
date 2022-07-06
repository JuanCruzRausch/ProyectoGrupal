const {Router} = require('express');
const deleteUserController = require('../controllers/deleteUserController');

const deleteUserRouter = Router();

deleteUserRouter.get('/:id', deleteUserController.getPostAndDelete);

module.exports = deleteUserRouter;
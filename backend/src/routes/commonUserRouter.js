const { Router } = require('express');
const commonUserController = require('../controllers/commonUserController');
const commonUserRouter = Router();

commonUserRouter.get('/:email', commonUserController.getUserEmail);
commonUserRouter.post('/', commonUserController.post);
commonUserRouter.patch('/updateUser', commonUserController.updateToUser);
commonUserRouter.patch('/toSeller/:id', commonUserController.toSeller);

module.exports = commonUserRouter;

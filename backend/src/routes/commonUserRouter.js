const { Router } = require('express');
const commonUserController = require('../controllers/commonUserController')
const commonUserRouter = Router();

commonUserRouter.get('/:email', commonUserController.getUserEmail)
commonUserRouter.post('/', commonUserController.post)
commonUserRouter.patch('/updateUser', commonUserController.updateToUser)

module.exports = commonUserRouter;

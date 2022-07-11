const { Router } = require('express');
const commonUserController = require('../controllers/commonUserController');
const commonUserRouter = Router();

const {authorizeAccessToken} = require('../utils/authorizeAccessToken')
const {roles} = require('../utils/roles')

commonUserRouter.get('/:email', commonUserController.getUserEmail);
commonUserRouter.post('/', commonUserController.post);
commonUserRouter.patch('/updateUser', commonUserController.updateToUser);
commonUserRouter.patch('/toSeller/:id', commonUserController.toSeller);
commonUserRouter.delete('/block/:id', authorizeAccessToken, roles.admin, commonUserController.blockUser);
commonUserRouter.get('/purchase-user/:id', commonUserController.getPurchasesUser)


module.exports = commonUserRouter;

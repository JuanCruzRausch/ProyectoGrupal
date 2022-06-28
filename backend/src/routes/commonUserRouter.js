const { Router } = require('express');
const commonUserController = require('../controllers/commonUserController')
const commonUserRouter = Router();

commonUserRouter.post('/', commonUserController.post)

module.exports = commonUserRouter;
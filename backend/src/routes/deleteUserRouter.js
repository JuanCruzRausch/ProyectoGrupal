const {Router} = require('express');
const deleteUserController = require('../controllers/deleteUserController');
const {authorizeAccessToken} = require('../utils/authorizeAccessToken')
const {roles} = require('../utils/roles')

const deleteUserRouter = Router();
//ESTA RUTA ES SEARCH AND DESTROY PARA EL ADMIN SOLAMENTE
deleteUserRouter.post('/:id', authorizeAccessToken, roles.admin, deleteUserController.getPostAndDelete); 

module.exports = deleteUserRouter;
const {Router} = require('express');
const deleteUserController = require('../controllers/deleteUserController');

const deleteUserRouter = Router();
//ESTA RUTA ES SEARCH AND DESTROY PARA EL ADMIN SOLAMENTE
deleteUserRouter.get('/', deleteUserController.getPostAndDelete); 

module.exports = deleteUserRouter;
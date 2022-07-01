const { Router } = require('express');
const qandaController = require('../controllers/qandaController')

const qandaRouter = Router();

qandaRouter.post('/', qandaController.post)

module.exports = qandaRouter;
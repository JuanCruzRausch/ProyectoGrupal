const express = require('express');
const reputationController = require('../controllers/reputationController');

const reputationRouter = Router();

reputationRouter.patch('/:idpubli/:idseller', reputationController.updateReputation);

module.exports = reputationRouter;
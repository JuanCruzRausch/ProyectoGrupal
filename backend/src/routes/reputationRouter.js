const express = require('express');
const { Router } = require('express');
const reputationController = require('../controllers/reputationController');

const reputationRouter = Router();

reputationRouter.patch('/:idpubli/:idseller/:iduser', reputationController.updateReputation);

module.exports = reputationRouter;
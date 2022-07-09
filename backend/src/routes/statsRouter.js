const {Router} = require('express')
const {authorizeAccessToken} = require('../utils/authorizeAccessToken')
const {roles} = require('../utils/roles')

const {getActiveUsersCount} = require('../controllers/statsController')

const statsRouter = Router();

statsRouter.get('/getActiveUsersCount', authorizeAccessToken, roles.admin, getActiveUsersCount)


module.exports = statsRouter;
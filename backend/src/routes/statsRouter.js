const {Router} = require('express')
const {authorizeAccessToken} = require('../utils/authorizeAccessToken')
const {roles} = require('../utils/roles')


const {getActiveUsersCount, getListUsers} = require('../controllers/statsController')


const statsRouter = Router();

statsRouter.get('/getActiveUsersCount', authorizeAccessToken, roles.admin, getActiveUsersCount)
statsRouter.get('/listUsers', authorizeAccessToken, roles.admin, getListUsers)



module.exports = statsRouter;
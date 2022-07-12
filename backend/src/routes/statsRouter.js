const { Router } = require('express');
const { authorizeAccessToken } = require('../utils/authorizeAccessToken');
const { roles } = require('../utils/roles');

const {
  getActiveUsersCount,
  getListUsers,
  getTotalSales,
  getAllActivePubs,
  getAllResults,
} = require('../controllers/statsController');

const statsRouter = Router();

statsRouter.get(
  '/getActiveUsersCount',
  authorizeAccessToken,
  roles.admin,
  getActiveUsersCount
);
statsRouter.get('/listUsers', authorizeAccessToken, roles.admin, getListUsers);
statsRouter.get(
  '/getAllActivePubs',
  authorizeAccessToken,
  roles.admin,
  getAllActivePubs
);
statsRouter.get(
  '/gettotalsales',
  authorizeAccessToken,
  roles.admin,
  getTotalSales
);
statsRouter.get('/getresults', getAllResults);

module.exports = statsRouter;

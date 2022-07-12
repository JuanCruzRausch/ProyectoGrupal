const AppError = require('../utils/appError');
const Seller = require('../models/Seller');
const Transaction = require('../models/Transaction');
const PublicationTest = require('../models/PublicationTest');
const CommonUser = require('../models/CommonUser');
const DeletedUser = require('../models/DeletedUser');
const DeletedPublication = require('../models/DeletedPublication');
const DeletedSeller = require('../models/DeletedSeller');
const catchAsync = require('../utils/catchAsync');
const { getAccessTokenAdmin, apiAuth0 } = require('../utils/apiAdminAuth0');

exports.getActiveUsersCount = async (_, res, next) => {
  try {
    const token = await getAccessTokenAdmin();
    const response = await apiAuth0.getActiveUsersCount(
      token.data.access_token
    );
    res.status(200).send(response);
  } catch (error) {
    next(new AppError(error));
    console.log(error);
  }
};

exports.getListUsers = async (_, res, next) => {
  try {
    const listUser = await CommonUser.find({});
    res.status(200).json({
      status: 'success',
      data: listUser,
    });
  } catch (error) {
    next(new AppError(error));
  }
};

exports.getAllActivePubs = async (_, res, next) => {
  try {
    let num = 0;
    const listSeller = await Seller.find({});
    listSeller.forEach((e) => (num = num + e.active_pub.length));
    res.status(200).json({
      status: 'success',
      data: num,
    });
  } catch (error) {
    next(new AppError(error));
  }
};

exports.getTotalSales = catchAsync(async (_, res, next) => {
  const salesFinder = await Transaction.countDocuments({ status: 'fulfilled' });
  console.log(salesFinder);
  if (!salesFinder) {
    return next(new AppError('There are no fulfilled transactions', 404));
  }
  res.status(200).json({
    status: 'success',
    data: salesFinder,
  });
});

exports.getAllResults = catchAsync(async (req, res, next) => {
  let activeUsers = await CommonUser.countDocuments({});
  let deletedUsers = await DeletedUser.countDocuments({});
  let totalPubs = await PublicationTest.countDocuments({});
  let activePubs = await PublicationTest.countDocuments({ status: true });
  let inactivePubs = await PublicationTest.countDocuments({ status: false });
  let deletedPubs = await DeletedPublication.countDocuments({});
  let sellers = await Seller.countDocuments({});
  let deletedSellers = await DeletedSeller.countDocuments({});
  let transactions = await Transaction.countDocuments({});
  let completedTransactions = await Transaction.countDocuments({
    'transaction.status': 'fulfilled',
  });
  let canceledTransactions = await Transaction.countDocuments({
    'transaction.status': 'rejected',
  });
  let pendingTransactions = await Transaction.countDocuments({
    'transaction.status': 'pending',
  });
  res.status(200).json({
    status: 'success',
    data: {
      activeUsers,
      deletedUsers,
      totalPubs,
      activePubs,
      inactivePubs,
      deletedPubs,
      sellers,
      deletedSellers,
      transactions,
      completedTransactions,
      canceledTransactions,
      pendingTransactions,
    },
  });
});

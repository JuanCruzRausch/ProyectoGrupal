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

exports.getCategoriesQ = catchAsync(async (_, res, next) => {

  let arrCat =[
      {
          id: "62bc77cc7531a26c209cdd18",
          name: "Animales y Mascotas",
          quantity: await  PublicationTest.countDocuments({ category: "62bc77cc7531a26c209cdd18" })
      },
      {
          id: "62bc996f7531a26c209cdd4d",
          name: "Tecnologia",
          quantity: await  PublicationTest.countDocuments({ category: "62bc996f7531a26c209cdd4d" })
      },
      {
          id: "62bc9ce7fb89b40812de09a4",
          name: "Vehículos",
          quantity: await  PublicationTest.countDocuments({ category: "62bc9ce7fb89b40812de09a4" })
      },
      {
          id: "62bca178428cf3f97d274e38",
          name: "Ropa",
          quantity: await  PublicationTest.countDocuments({ category: "62bca178428cf3f97d274e38" })
      },
      {
          id: "62bca43d428cf3f97d274e40",
          name: "Alimentos",
          quantity: await  PublicationTest.countDocuments({ category: "62bca43d428cf3f97d274e40" })
      },
      {
          id: "62bca676428cf3f97d274e4a",
          name: "Cuidado personal",
          quantity: await  PublicationTest.countDocuments({ category: "62bca676428cf3f97d274e4a" })
      },
      {
          id: "62bcaf56428cf3f97d274e7c",
          name: "Electrodomésticos",
          quantity: await  PublicationTest.countDocuments({ category: "62bcaf56428cf3f97d274e7c" })
      },
      {
          id: "62bcafe7428cf3f97d274e84",
          name: "Librería",
          quantity: await  PublicationTest.countDocuments({ category: "62bcafe7428cf3f97d274e84" })
      },
      {
          id: "62bcb1d0428cf3f97d274e92",
          name: "Entretenimiento",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb1d0428cf3f97d274e92" })
      },
      {
          id: "62bcb273428cf3f97d274e9c",
          name: "Herramientas",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb273428cf3f97d274e9c" })
      },
      {
          id: "62bcb443428cf3f97d274eb0",
          name: "Hogar",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb443428cf3f97d274eb0" })
      },
      {
          id: "62bcb4ef428cf3f97d274eb7",
          name: "Deportes",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb4ef428cf3f97d274eb7" })
      },
      {
          id: "62bcb664428cf3f97d274ecb",
          name: "Inmobiliaria",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb664428cf3f97d274ecb" })
      },
      {
          id: "62bcb7ef428cf3f97d274ecf",
          name: "Otros",
          quantity: await  PublicationTest.countDocuments({ category: "62bcb7ef428cf3f97d274ecf" })
      }
      
  ]


res.status(200).json({
  status: 'success',
  data: arrCat
})
});

exports.getAllSales = async(req, res, next) => {
  try{
    const transaction = await Transaction.find()
    const sales = []
    transaction.filter(e =>  e.dateOfBuy.getMonth() === new Date(Date.now()).getMonth() && e.transaction.status === 'fulfilled' ).forEach((e,i) => {
      sales[e.dateOfBuy.getDate()] = sales[e.dateOfBuy.getDate()]? (sales[e.dateOfBuy.getDate()] + e.transaction.quantity) : e.transaction.quantity
    })
    const days = []
    const day = new Date(Date.now()).getDate()
    for (let i = 1; i < day+1; i++) {
      days.push(i)
    }
    for (let i = 0; i < sales.length; i++) {
      typeof sales[i] !== 'number'?sales[i]=0:null
    }
    res.status(200).json({
      status: 'success',
      data: {
        sales: sales,
        days: days
      }
    })  
  }catch(error){
   next(new AppError(error))
  }
}

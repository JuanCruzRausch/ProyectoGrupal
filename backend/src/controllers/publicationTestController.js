const PublicationTest = require('../models/PublicationTest');
const CategoryTest = require('../models/CategoryTest');
const SubCategory = require('../models/SubCategory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.postPublicationTest = catchAsync(async (req, res, next) => {
  let finalPrice = 0,
    freeS = 0,
    vis = 0,
    f = 0,
    p = 0;

  if (req.body.promPrice > req.body.price) {
    return next(
      new AppError('A promotion price must be lower than the base price')
    );
  }
  if (req.body.stock.stockTotal <= 0) {
    return next(new AppError('You should have at least 1 product in stock'));
  }

  switch (req.body.visibility) {
    case 1:
      vis = 0;
      break;
    case 2:
      vis = 5;
      break;
    case 3:
      vis = 10;
      break;
    default:
      vis = 0;
      break;
  }

  if (req.body.currency === 'USD') {
    f = 2.5;
    p = 50;
  } else {
    f = 500;
    p = 10000;
  }

  if (req.body.freeShipping) {
    if (req.body.price >= p) {
      freeS = f + req.body.price * 0.01;
    } else {
      freeS = f;
    }
  }

  if (req.body.promPrice) {
    finalPrice = (req.body.promPrice * vis) / 100 + req.body.promPrice + freeS;
  } else {
    finalPrice = (req.body.price * vis) / 100 + req.body.price + freeS;
  }

  const newPub = await PublicationTest.create({
    title: req.body.title,
    description: req.body.description,
    pictures: req.body.pictures,
    price: finalPrice,
    promPrice: req.body.promPrice,
    currency: req.body.currency,
    seller: req.body.seller,
    category: req.body.category,
    subCategory: req.body.subCategory,
    sellerShipping: req.body.sellerShipping,
    freeShipping: req.body.freeShipping,
    pickup: req.body.pickup,
    condition: req.body.condition,
    stock: {
      stockTotal:
        req.body.stock.options.length > 0
          ? req.body.stock.options.reduce((acc, obj) => acc + obj.stock, 0)
          : req.body.stockTotal,
      options: req.body.stock.options,
    },
    brand: req.body.brand,
    location: req.body.location,
    visibility: req.body.visibility,
  });

  res.status(201).json({
    status: 'success',
    data: {
      publication: newPub,
    },
  });
});

exports.deletePublicationTest = catchAsync(async(req,res,next)=>{
  const {id} = req.params;
  const publi_delete = await PublicationTest.deleteOne({id});
  res.status(204).json({status:'succes', data: 'done'});
  next();
});

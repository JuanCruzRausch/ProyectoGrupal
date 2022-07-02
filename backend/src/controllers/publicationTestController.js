const PublicationTest = require('../models/PublicationTest');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const cloudinary = require('../../cloudinary');
const fs = require('fs');

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

  if (
    req.body.shipping.shippingType === 'seller' ||
    req.body.shipping.shippingType === 'pickup'
  ) {
    freeS = 0;
  } else {
    if (req.body.shipping.shippingType === 'free') {
      if (req.body.price >= p) {
        freeS = f + req.body.price * 0.02;
      } else {
        freeS = f;
      }
    } else {
      if (req.body.price >= p) {
        freeS = f + req.body.price * 0.01;
      } else {
        freeS = f;
      }
    }
  }

  if (req.body.promPrice) {
    finalPrice = (req.body.promPrice * vis) / 100 + req.body.promPrice + freeS;
  } else {
    finalPrice = (req.body.price * vis) / 100 + req.body.price + freeS;
  }

  if (req.body.shipping.shippingType === 'free') {
    freeS = 0;
  }

  const newPub = await PublicationTest.create({
    title: req.body.title,
    description: req.body.description,
    pictures: req.body.pictures,
    price: req.body.price,
    finalPrice,
    promPrice: req.body.promPrice,
    currency: req.body.currency,
    seller: req.body.seller,
    category: req.body.category,
    subCategory: req.body.subCategory,
    shipping: {
      shippingType: req.body.shipping.shippingType,
      shippingPrice: freeS,
    },
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

exports.deletePublicationTest = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const publi_delete = await PublicationTest.deleteOne({ id });
  res.status(204).json({ status: 'succes', data: 'done' });
  next();
});

exports.getAllPublicationTest = catchAsync(async (req, res, next) => {
  const features = new apiFeatures(PublicationTest.find(), req.query)
    .filter()
    .sort()
    .limit()
    .paginate();
  // Ejecutamos el query
  const publications = await features.query;

  res.status(200).json({
    status: 'success',
    results: publications.length,
    data: {
      publications,
    },
  });
});

exports.getPublicationTestID = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new AppError('ID is required, 400'));

  const publi = await PublicationTest.findOne({ _id: id })
    .select('-__v')
    .populate({
      path: 'seller',
      select: '-user -non_answered -answered -inactive_pub -__v',
    })
    .populate({ path: 'category', select: '-subcategories -__v' })
    .populate({ path: 'subCategory', select: '-properties -__v' })
    .populate({ path: 'questions' })
    .populate({ path: 'transactions' });

  if (!publi) {
    return next(new AppError('The id does not match with any product', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      publi,
    },
  });
});
exports.postImages = catchAsync(async (req, res, next) => {
  try{
    const uploader = async (path) => await cloudinary.uploads(path, 'Images');
    const urls = []
    const files = req.files
    console.log(files)
    for(const file of files){
      const {path} = file;
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }
    
    res.status(200).json({
      message: 'Images uploaded successfully',
      data: urls
    })
    console.log('urls', urls);
    // await Image.insertMany(urls);
  }catch(e){
    res.status(405).json({
      err: 'Images not uploaded successfully'
    })
  }  
});
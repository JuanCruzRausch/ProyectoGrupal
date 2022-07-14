const PublicationTest = require('../models/PublicationTest');
const Seller = require('../models/Seller');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.postPublicationTest = catchAsync(async (req, res, next) => {
  let userId = req.params.id;
  let earnings = 0,
    freeS = 0,
    vis = 0,
    f = 0,
    p = 0;

  if (Number(req.body.promPrice) > Number(req.body.price)) {
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
      if (Number(req.body.price) >= p) {
        freeS = f + Number(req.body.price) * 0.02;
      } else {
        freeS = f;
      }
    } else {
      if (Number(req.body.price) >= p) {
        freeS = f + Number(req.body.price) * 0.01;
      } else {
        freeS = f;
      }
    }
  }

  if (req.body.promPrice) {
    earnings =
      Number(req.body.promPrice) -
      Number(req.body.promPrice) * 0.27 -
      ((Number(req.body.promPrice) * vis) / 100 + freeS);
  } else {
    earnings =
      Number(req.body.price) -
      Number(req.body.price) * 0.27 -
      ((Number(req.body.price) * vis) / 100 + freeS);
  }

  if (req.body.shipping.shippingType === 'free') {
    freeS = 0;
  }
  let sell = await Seller.findOne({ user: userId });
  if (!sell) {
    return next(new AppError('There is no seller with that id', 404));
  }
  const newPub = await PublicationTest.create({
    title: req.body.title,
    description: req.body.description,
    pictures: req.body.pictures,
    price: Number(req.body.price),
    earnings,
    promPrice: req.body.promPrice,
    currency: req.body.currency,
    seller: sell._id,
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

  let seller = await Seller.findOne({ user: userId });

  let doc = await Seller.findOneAndUpdate(
    { user: userId },
    { active_pub: [...seller.active_pub, newPub._id] },
    { new: true }
  );

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
  const features = new apiFeatures(
    PublicationTest.find({ status: { $ne: false } }),
    req.query
  )
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

exports.getAllPublicationForAdmin = catchAsync(async (req, res, next) => {
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
    .populate({ path: 'transactions' })
    .populate({path: 'reviews'});

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

exports.getPublicationByName = catchAsync(async (req, res, next) => {
  const { title } = req.params;

  const features = new apiFeatures(
    PublicationTest.find({ status: { $ne: false } }),
    req.query
  )
    .filter()
    .sort()
    .limit()
    .paginate();
  if (!title) return next(new AppError('Title is required, 400'));

  const publications = await features.query;

  const search = publications.filter((e) =>{
    return e.title.toLowerCase().startsWith(title.toLowerCase())}
  );
  
  if (!publications) {
    return next(new AppError('The id does not match with any product', 404));
  }

  res.status(200).json({
    status: 'success',
    data: search,
  });
});

exports.getProductsBySeller = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const allSellerProducts = await PublicationTest.find({ seller: id });

  if (!allSellerProducts) {
    return next(
      new AppError('There are no products posted from that seller', 404)
    );
  }

  res.status(200).json({
    status: 'success',
    data: allSellerProducts,
  });
});

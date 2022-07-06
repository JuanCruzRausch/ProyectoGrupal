const PublicationTest = require('../models/PublicationTest');
const DeletedPublication = require('../models/DeletedPublication');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllDeletedPublication = catchAsync(async (req, res, next) => {
  const features = new apiFeatures(DeletedPublication.find(), req.query)
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

exports.postDeletedPublication = catchAsync(async (req, res, next) => {
  let deletedPub = await PublicationTest.findById(req.params.id);
  console.log(deletedPub);
  const newDeletedPub = await DeletedPublication.create({
    _id: deletedPub._id,
    title: deletedPub.title,
    description: deletedPub.description,
    pictures: deletedPub.pictures,
    price: deletedPub.price,
    earnings: deletedPub.earnings,
    promPrice: deletedPub.promPrice,
    currency: deletedPub.currency,
    seller: deletedPub.seller,
    category: deletedPub.category,
    subCategory: deletedPub.subCategory,
    shipping: {
      shippingType: deletedPub.shipping.shippingType,
      shippingPrice: deletedPub.shipping.shippingPrice,
    },
    condition: deletedPub.condition,
    stock: {
      stockTotal: deletedPub.stock.stockTotal,
      options: deletedPub.stock.options,
    },
    brand: deletedPub.brand,
    location: deletedPub.location,
    visibility: deletedPub.visibility,
  });

  await PublicationTest.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: { newDeletedPub },
  });
});

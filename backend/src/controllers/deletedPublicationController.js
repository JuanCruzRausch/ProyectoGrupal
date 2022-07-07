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
  const newDeletedPub = await DeletedPublication.create({ ...deletedPub._doc });

  await PublicationTest.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: { newDeletedPub },
  });
});

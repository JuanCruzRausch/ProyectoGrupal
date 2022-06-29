const SubCategory = require('../models/SubCategory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.postSubCategory = catchAsync(async (req, res, next) => {
  const newSubCategory = await SubCategory.create({
    name: req.body.name,
    properties: req.body.properties,
  });

  res.status(201).json({
    status: 'success',
    data: {
      newSubCategory,
    },
  });
});

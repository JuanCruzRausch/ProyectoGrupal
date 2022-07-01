const CategoryTest = require ('../models/CategoryTest');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    const newCategory = await CategoryTest.create ({
        name: req.body.name,
        subcategories: req.body.subcategories
    })
    res.status(201).json({status:"success", data: newCategory})
});

exports.getAllCategoryTest = catchAsync(async (req, res, next) => {
    const categories = await CategoryTest.find({}).select('-__v')
      .populate({
      path: 'subcategories',
      select: '-__v'
    });
  
    if (categories.length <= 0) {
      return next(new AppError('No categories found', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  });
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

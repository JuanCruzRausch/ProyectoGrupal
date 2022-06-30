const CategoryTest = require ('../models/CategoryTest');
const SubCategory = require('../models/SubCategory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    const newCategory = await CategoryTest.create ({
        name: req.body.name,
        subcategories: req.body.subcategories
    })
    res.status(201).json({status:"success", data: newCategory})
});

exports.getAllCategoryTest = (req,res)=>{
    try {
        CategoryTest.find({}, function(err,categories){
            SubCategory.populate(categories, {path:"subcategories"}, function(err,categories){
                res.status(200).send(categories)
            })});
        
    } catch (error) {
        console.log(error)
    }


};
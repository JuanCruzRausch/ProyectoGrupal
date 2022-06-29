const CommonUser = require ('../models/CommonUser');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    const newUser = await CommonUser.create ({
        name: req.body.name,
        lastname: req.body.lastname,
        country: req.body.country,
        email:req.body.email,
        role: req.body.role,
        address:{
            province: req.body.address.province,
            city:req.body.address.city,
            postalcode:req.body.address.postalcode,
            street:req.body.address.street,
            number:req.body.address.number,
            dpto:{
                floor:req.body.address.dpto.floor,
                number:req.body.address.dpto.number
            },
            ref:req.body.address.ref
        },
        phone:req.body.phone,
        credit_card:req.body.credit_card,
        photo:req.body.photo,
    })
    res.status(201).json({status:"success", data: newUser})
    next()
})
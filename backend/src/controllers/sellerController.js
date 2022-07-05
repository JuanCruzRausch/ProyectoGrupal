const Seller = require ('../models/Seller');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    const newSeller = await Seller.create ({
        user: req.body.user,
        brand: req.body.brand,
        social_net:{
            ig: req.body.social_net.ig,
            fb: req.body.social_net.fb,
            tw: req.body.social_net.tw,
        },
        subsidiary:{
            google_map: req.body.subsidiary.google_map,
            province: req.body.subsidiary.province,
            city: req.body.subsidiary.city,
            postalCode: req.body.subsidiary.postalCode,
            street: req.body.subsidiary.street,
            number: req.body.subsidiary.number,
            reference: req.body.subsidiary.reference
        }
    });
    res.status(201).json({status:"success", data: newSeller})
    next();
})


exports.patch = catchAsync (async (req,res,next) =>{
    const {user, brand, social_net, subsidiary} = req.body
    const {ig,fb,tw} = social_net
    const {google_map, province, city, postalCode, street, number, reference} = subsidiary

    const updatedSeller = await Seller.updateOne({user : user}, {brand, social_net, subsidiary});
    const sellerUpdated = await Seller.findOne({user})

    res.status(201).json({status:"success", data: sellerUpdated})
    next();

})
    
const Seller = require ('../models/Seller');
const CommonUser = require('../models/CommonUser');
const PublicationTest = require('../models/PublicationTest');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    
    let userFind = await CommonUser.findOne({_id: req.body.user});
    if(userFind.authorization.roles.includes('seller')){
        return next(new AppError('The user is already logged as a Seller', 400))
    }
   
    const newSeller = await Seller.create ({
        user: req.body.user,
        brand: req.body.brand,
        social_net:{
            ig: req.body.social_net?.ig,
            fb: req.body.social_net?.fb,
            tw: req.body.social_net?.tw,
        },
        subsidiary:{
            google_map: req.body.subsidiary?.google_map,
            province: req.body.subsidiary?.province,
            city: req.body.subsidiary?.city,
            postalCode: req.body.subsidiary?.postalCode,
            street: req.body.subsidiary?.street,
            number: req.body.subsidiary?.number,
            reference: req.body.subsidiary?.reference
        }
    });
    res.status(201).json({status:"success", data: newSeller})
    next();
})

exports.patch = catchAsync (async (req,res,next) =>{    
    const {_id, brand, social_net, subsidiary} = req.body
    const {ig,fb,tw} = social_net
    const {google_map, province, city, postalCode, street, number, reference} = subsidiary
     
    const updatedSeller = await Seller.findByIdAndUpdate({_id:_id}, {
        brand, 
        social_net, 
        subsidiary, 
    },{
        new: true,
        runValidators: true,
    });

    if(!updatedSeller){
        return next(new AppError('No seller was found', 404));
    }
    // const sellerUpdated = await Seller.findOne({user})

    res.status(200).json({status:"success", data: updatedSeller})
   

});

exports.getSeller = catchAsync(async(req,res,next)=>{
    const {id} = req.params;
    const features = new apiFeatures(Seller.findOne({user:id}, req.query))
        .filter()
   
    const seller = await features.query;
if(!seller){
    return next(new AppError('No seller was found with the id', 404));
}
    res.status(200).json({
        status: 'success',
        data:{
            seller,
        },
    });

});

exports.updateActivePubs = catchAsync(async(req,res,next)=>{
    const{id} = req.params;
    let idsArr=[];
    const pubUpdate = await PublicationTest.find({seller:id}).select('_id')
   
    if(!pubUpdate){
        return next(new AppError('The publication doesnt match to any seller weeeeeiiiird', 404));
    }

    for(let i=0; i < pubUpdate.length; i++){
        idsArr.push(pubUpdate[i]._id)
    }
  
    const sellerUpdate = await Seller.findByIdAndUpdate({_id:id},{$push:{active_pub:[idsArr]}},{
        new:true
    })
 
    res.status(200).json({
        status:'success',
        data:{
            sellerUpdate
        }
    })

})



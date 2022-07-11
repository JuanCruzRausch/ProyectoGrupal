const catchAsync = require("../utils/catchAsync");
const Transaction = require("../models/Transaction");

exports.postTransaction = catchAsync(async(req,res,next)=>{
    const newTransaction = await Transaction.create({
        publication:req.body.publication,
        transactionAmount: req.body.transactionAmount,
        seller:req.body.seller,
        buyer:req.body.buyer,
        status:req.body.status,
        sellerRating:req.body.sellerRating,
        productRating:req.body.productRating
    });
    res.status(201).json({
        status:'success',
        data:{
            newTransaction,
        },
    });
})

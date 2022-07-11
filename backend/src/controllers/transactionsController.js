const catchAsync = require("../utils/catchAsync");
const Transaction = require("../models/Transaction")

exports.postTransaction = catchAsync(async(req,res,next)=>{
    const newTransaction = await Transaction.create({
        transactions:[{
            seller: req.body.seller,
            sellerRating: req.body.sellerRating,
            productRating: req.body.productRating,
            quantity: req.body.quantity,
            earnings: {
                total_money: req.body.total_money,
                seller_earnings: req.body.seller_earnings,
                platform_earnings: req.body.platform_earnings
            },
            status: req.body.status
        }],
        buyer:req.body.buyer,
    });
    res.status(201).json({
        status:'success',
        data:{
            newTransaction,
        },
    });
})
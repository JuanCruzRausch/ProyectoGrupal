const QandA = require('../models/QandA');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async(req,res,next)=>{
    const newQandA = await QandA.create ({
        publication_id: req.body.publication_id,
        seller_id: req.body.seller_id,
        buyer_id: req.body.buyer_id,
        question: req.body.question,
        answer: req.body.answer,
    })
    res.status(201).json({status:"success", data: newQandA})
})
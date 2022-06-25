const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getUser= catchAsync(async (req, res, next) => {
    
        const {idSeller} = req.params;
        let sellerInfo = await User.findOne({_id:idSeller})

        if(!sellerInfo) return next( new AppError('not found',400));

        res.status(201).json({
            status: "success",
            data: {
                sellerInfo
            },
          });
    
        
    });
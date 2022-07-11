const AppError = require('../utils/appError')
const Seller = require('../models/Seller');
const Transaction = require('../models/Transaction');
const catchAsync = require('../utils/catchAsync')
const {getAccessTokenAdmin, apiAuth0} = require('../utils/apiAdminAuth0')


const CommonUser = require('../models/CommonUser');


exports.getActiveUsersCount = async(_, res, next) => {
    try {
        const token = await getAccessTokenAdmin()
        const response = await apiAuth0.getActiveUsersCount(token.data.access_token)
        res.status(200).send(response)
    } catch (error) {
        next(new AppError(error))
        console.log(error)
    }
}

exports.getListUsers = async(_, res, next) => {
    try {
        const listUser = await CommonUser.find({})
        res.status(200).json({
            status: 'success',
            data: listUser
        })
    } catch (error) {
        next(new AppError(error))
    }
}

exports.getAllActivePubs = async (_, res, next) => {
    try {
        let num = 0
        const listSeller = await Seller.find({})
        listSeller.forEach(e => num = num + e.active_pub.length)
        res.status(200).json({
            status: 'success',
            data: num
        })
    } catch (error) {
        next(new AppError(error))
    }
}

exports.getTotalSales = catchAsync(async(_,res,next)=>{
    const salesFinder = await Transaction.countDocuments({status:'fulfilled'})
    console.log(salesFinder)
    if(!salesFinder){
        return next(new AppError('There are no fulfilled transactions', 404))
    }
    res.status(200).json({
        status: 'success',
        data:salesFinder
    })
})


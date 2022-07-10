const AppError = require('../utils/appError')
const Seller = require('../models/Seller');
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

exports.getAllSales = async (_, res, next) => {
    try {
        let num = 0
        const listSeller = await Seller.find({})
        listSeller.forEach(e => num = num + e.active_pub.length)
        res.status(200).json({
            status: 'success',
            data: activePubs.length
        })
    } catch (error) {
        next(new AppError(error))
    }
}

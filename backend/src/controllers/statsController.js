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
        const listSeller = await Seller.find({})
        const activePubs = listSeller.map(e => e.active_pub)
        res.status(200).json({
            status: 'success',
            data: activePubs.length
        })
    } catch (error) {
        next(new AppError(error))
    }
}
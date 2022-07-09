const AppError = require('../utils/appError')
const {getAccessTokenAdmin, apiAuth0} = require('../utils/apiAdminAuth0')

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
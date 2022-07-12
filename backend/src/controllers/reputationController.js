const Seller = require('../models/Seller');
const PublicationTest = require('../models/PublicationTest');
const catchAsync = require('../utils/catchAsync');

exports.updateReputation = catchAsync(async(req,res,next) =>{
    const idseller = req.params.idseller
    const idpubli = req.params.idpubli
    const {rep} = req.body // rating del vendedor
    const {rat} = req.body // rating de la publicación

    const findSeller = await Seller.findOne({_id:idseller});
    if(!findSeller){
        return next(new AppError('There is not a seller with that id', 404))
    }

    await Seller.updateOne({_id:idseller},{reputation:{total_votes:[...findSeller.reputation.total_votes,rep]}},{runValidators:true})
    const findPublication = await PublicationTest.findOne({_id: idpubli});
    await PublicationTest.updateOne({_id: idpubli}, {rating: [...findPublication.rating.total_votes,rat]},{runValidators:true})

    res.status(200).json({
        status:'success',
        data:'done'
    })
});
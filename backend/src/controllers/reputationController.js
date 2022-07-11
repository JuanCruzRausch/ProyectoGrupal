const Seller = require('../models/Seller');
const PublicationTest = require('../models/PublicationTest');
const catchAsync = require('../utils/catchAsync');

exports.updateReputation = catchAsync(async(req,res,next) =>{
    const idseller = req.params.idseller
    const idpubli = req.params.idpubli
    const {rep} = req.body // rating del vendedor
    const {rat} = req.body // rating de la publicación

    const findSeller = await Seller.find({_id:idseller});
    if(!findSeller){
        return next(new AppError('There is not a seller with that id', 404))
    }

    const sellerRating = await Seller.updateOne({_id:idseller},{reputation:{total_votes: [...findSeller.reputation.total_votes,rep]}})

    const findPublication = await PublicationTest.find({_id: idpubli});
    const publiRating = await PublicationTest.updateOne({_id: idpubli}, {rating:{total_votes:[...findPublication.rating.total_votes,rat]}})

    res.status(200).json({
        status:'success',
        data:'done'
    })
});
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
    findSeller.reputation.total_votes.push(rep)
    let sumSellerVotes = findSeller.reputation.total_votes.reduce((prev,curr)=>prev+curr,0)
    let promSeller = Math.floor(sumSellerVotes / (findSeller.reputation.total_votes.length))
    
    await Seller.updateOne({_id:idseller},{reputation:{average: promSeller, total_votes:[...findSeller.reputation.total_votes]}},{runValidators:true})
    
    
    
    const findPublication = await PublicationTest.findOne({_id: idpubli});

    findPublication.rating.total_votes.push(rat)
    let sumPubVotes = findPublication.rating.total_votes.reduce((prev,curr)=>prev+curr,0)
    let promPubs = Math.floor(sumPubVotes / (findPublication.rating.total_votes.length))
    
    await PublicationTest.updateOne({_id: idpubli}, {rating:{average: promPubs, total_votes:[...findPublication.rating.total_votes]}},{runValidators:true})

    res.status(200).json({
        status:'success',
        data:'done'
    })
});
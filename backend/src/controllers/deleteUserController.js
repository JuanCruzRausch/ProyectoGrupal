const DeletedUser = require('../models/DeletedUser');
const CommonUser = require('../models/CommonUser');
const Seller = require('../models/Seller')
const DeletedPublication = require('../models/DeletedPublication');
const DeletedSeller = require('../models/DeletedSeller');
const PublicationTest = require('../models/PublicationTest');

// const PublicationTest = require('../models/PublicationTest');

exports.getPostAndDelete =(req,res)=>{
    CommonUser.findOne({
        _id: req.params.id
    })  
    .then(commonuser => {    
        var newdoc = new DeletedUser(commonuser);    
        newdoc.isNew = true;      
        newdoc.save();
    })

    Seller.findOne({
        user: req.params.id
    })
    .then(seller=>{
        var newsell = new DeletedSeller(seller);
        newsell.isNew = true;
        newsell.save();
    })
    
    Seller.findOne({
        user:req.params.id
    })
    .then(data => {
    console.log(data)
        PublicationTest.find({seller: data.seller})
        .then(publication=>{
            var newPubli = new DeletedPublication(publication) //esto hace una publi o crea todos los documentos en la collection?
            newPubli.isNew = true;
            newPubli.save();
        })
    })

    res.status(200).json({status:'success',data:'done'});
};
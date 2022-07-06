const DeletedUser = require('../models/DeletedUser');
const CommonUser = require('../models/CommonUser');
const Seller = require('../models/Seller')
const DeletedPublication = require('../models/DeletedPublication');
const DeletedSeller = require('../models/DeletedSeller');
const PublicationTest = require('../models/PublicationTest');

exports.getPostAndDelete =async(req,res)=>{

   //Busca usuario y lo postea en la nueva collection
    CommonUser.findOne({
        _id: req.params.id
    })  
    .then(commonuser => {    
        var newdoc = new DeletedUser(commonuser);    
        newdoc.isNew = true;      
        newdoc.save();
    })
    //Busca el vendedor ligado a ese usuario y lo postea en la nueva collection
    Seller.findOne({
        user: req.params.id
    })
    .then(seller=>{
        var newsell = new DeletedSeller(seller);
        newsell.isNew = true;
        newsell.save();
    })
    
    //Busca todas las publicaciones ligadas al usuario y la/s postea en la nueva collection
    PublicationTest.find({seller: req.params.id})
        .then(publication=>{
            
            publication.map((el) => {
                var newPubli = new DeletedPublication(el)
                newPubli.isNew = true;
                newPubli.save();
            })
            
            // for (let i=0; i < publication.length; i++){
            //     var newPubli = new DeletedPublication(publication[i])
            //     newPubli.isNew = true;
            //     newPubli.save();

            // }
        })
    //ACÁ ABAJO BORRA LAS PUBLICACIONES, EL SELLER Y EL USUARIO
    await PublicationTest.deleteMany({seller: req.params.id})
    await Seller.deleteOne({user: req.params.id})
    await CommonUser.deleteOne({_id: req.params.id})

    res.status(200).json({status:'success',data:'done'});
};
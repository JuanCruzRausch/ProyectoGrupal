const DeletedUser = require('../models/DeletedUser');
const CommonUser = require('../models/CommonUser');
const Seller = require('../models/Seller');
const DeletedPublication = require('../models/DeletedPublication');
const DeletedSeller = require('../models/DeletedSeller');
const PublicationTest = require('../models/PublicationTest');
const catchAsync = require('../utils/catchAsync');

exports.getPostAndDelete = catchAsync(async (req, res, next) => {
  const {id} = req.params

  let userForDelete = await CommonUser.findById(id); 
  let sellerForDelete = await Seller.findOne({ user: id });


//A continuacion crea en la nueva collection las publicaciones a borrar
  PublicationTest.find({seller: sellerForDelete._id})
        .then(publication=>{
            for (let i=0; i < publication.length; i++){
                var newPubli = new DeletedPublication(publication[i])
                newPubli.isNew = true;
                newPubli.save();

            }
        })


const userDeleted = await DeletedUser.create({ ...userForDelete._doc });
const sellerDeleted = await DeletedSeller.create({...sellerForDelete._doc});

//A continuacion borra todos los datos de la original collection
await PublicationTest.deleteMany({ seller: sellerForDelete._id });

await Seller.deleteOne({ user: id });
  
await CommonUser.deleteOne({_id:id});

  res.status(200).json({ 
    status: 'success', 
    data: 'done'
 });
});

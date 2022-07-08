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



  let pubsForDelete = await PublicationTest.find({seller: sellerForDelete._id}); 
  

  const userDeleted = await DeletedUser.create({ ...userForDelete._doc });

  const sellerDeleted = await DeletedSeller.create({...sellerForDelete._doc});

  const pubsDeleted = await DeletedPublication.create([...pubsForDelete]);
    

//   await PublicationTest.deleteMany({ seller: sellerForDelete._id });
//   console.log('BORRÓ LAS PUBLICACIONES')
//   await Seller.deleteOne({ user: id });
//   console.log('BORRÓ EL SELLER');
//   await CommonUser.deleteOne(id);

  res.status(200).json({ 
    status: 'success', 
    data: 'done'
 });
});

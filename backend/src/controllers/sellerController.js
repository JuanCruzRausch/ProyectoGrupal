const Seller = require('../models/Seller');
const CommonUser = require('../models/CommonUser');
const PublicationTest = require('../models/PublicationTest');
const DeletedPublication = require('../models/DeletedPublication');
const apiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = catchAsync(async (req, res, next) => {
  let userFind = await CommonUser.findOne({ _id: req.body.user });
  if (userFind.authorization.roles.includes('seller')) {
    return next(new AppError('The user is already logged as a Seller', 400));
  }

  const newSeller = await Seller.create({
    user: req.body.user,
    brand: req.body.brand,
    social_net: {
      ig: req.body.social_net?.ig,
      fb: req.body.social_net?.fb,
      tw: req.body.social_net?.tw,
    },
    subsidiary: {
      google_map: req.body.subsidiary?.google_map,
      province: req.body.subsidiary?.province,
      city: req.body.subsidiary?.city,
      postalCode: req.body.subsidiary?.postalCode,
      street: req.body.subsidiary?.street,
      number: req.body.subsidiary?.number,
      reference: req.body.subsidiary?.reference,
    },
  });
  res.status(201).json({ status: 'success', data: newSeller });
  next();
});

exports.patch = catchAsync (async (req,res,next) =>{    
    const {_id, brand, social_net, subsidiary} = req.body
    const {ig,fb,tw} = social_net
    const {google_map, province, city, postalCode, street, number, reference} = subsidiary
     
    const updatedSeller = await Seller.findByIdAndUpdate({_id:_id}, {
        brand, 
        social_net, 
        subsidiary, 
    },{
        new: true,
        runValidators: true,
    });

  if (!updatedSeller) {
    return next(new AppError('No seller was found', 404));
  }
  // const sellerUpdated = await Seller.findOne({user})

  res.status(200).json({ status: 'success', data: updatedSeller });
});

exports.getSeller = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const features = new apiFeatures(
    Seller.findOne({ user: id }, req.query)
  ).filter();

  const seller = await features.query;
  if (!seller) {
    return next(new AppError('No seller was found with the id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      seller,
    },
  });
});

exports.updateActivePubs = catchAsync(async(req,res,next)=>{
    const{id} = req.params; //recibe el ID del Seller
    let idsArr=[];//Está vacío, pero vos esperá
    const pubUpdate = await PublicationTest.find({seller:id}).select('_id') // Busca en las publicaciones de ese seller y solo trae el id, si es poco performante 
   
    if(!pubUpdate){
        return next(new AppError('The publication doesnt match to any seller weeeeeiiiird', 404));
    } 
    
    let pubID = pubUpdate[0]._id //pubID solamente tiene el ID ahora
    
    const findSeller = await Seller.findById({_id:id}) //Encuentra al vendedor con ese ID que le pasaste arriba

    const activeSeller = findSeller.active_pub //Entra a active_pub que es un arreglo, son muchos pasos pero a Mongoose le gusta caminar

    console.log('ESTE ES EL SELLER ENCONTRADO', findSeller)
    console.log('ESTE ES EL PUBID',pubID)
    console.log('ESTE ES EL FINDSELLER ACTIVE PUB', activeSeller)
   
    if(!activeSeller.includes(pubID)){ //Si el active_pub del vendedor ya tiene ese ID del producto, entonces no lo incorpora
         idsArr.push(pubID)
    }else{
       return next(new AppError('This product is already in the active_pub of seller', 404))
    }

    console.log('Este es el array',idsArr)
  
    const sellerUpdate = await Seller.findByIdAndUpdate({_id:id},{$push:{active_pub:[idsArr]}},{ //Sin ese $push mongo no te deja colocar más elementos en el active_pub
        new:true
    })
    console.log('ESTE ES EL SELLER UPDATE',sellerUpdate)
    res.status(200).json({
        status:'success',
        data:{
            sellerUpdate
        }
    })
    
})

exports.postAndDeletePublication = catchAsync(async (req, res, next) => {
  let deletedPub = await PublicationTest.findById(req.params.idpub);
  let seller = await Seller.findOne({ user: req.params.iduser });
  let sellerpub = deletedPub.seller + '';
  let sellerid = seller._id + '';
  console.log(deletedPub);
  if (sellerpub !== sellerid) {
    return next(new AppError('The publication does not to the user', 400));
  }
  console.log({ ...deletedPub._doc });
  const newDeletedPub = await DeletedPublication.create({ ...deletedPub._doc });

  let indice = seller.active_pub.indexOf(deletedPub);
  let indiceIn = seller.inactive_pub.indexOf(deletedPub);
  await Seller.findByIdAndUpdate(seller._id, {
    active_pub: seller.active_pub.splice(indice, 1),
    inactive_pub: seller.inactive_pub.splice(indiceIn, 1),
  });
  await PublicationTest.findByIdAndDelete(req.params.idpub);
  res.status(200).json({
    status: 'success',
    data: { newDeletedPub },
  });
});

exports.passtoInactive = catchAsync(async (req, res, next) => {});

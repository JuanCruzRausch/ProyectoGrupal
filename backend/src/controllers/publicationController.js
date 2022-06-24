const User = require('../models/User');
const Category = require('../models/Category');
const Publication = require('../models/Publication');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.post = async (req, res, next) => {
  try {
    const { publication } = req.body;
    const seller = await User.find({ name: publication.seller.name });
    const category = await Category.find({ name: publication.category });
    const newPublication = await Publication.create({
      title: publication.title,
      descriptions: publication.descriptions,
      price: publication.price,
      currency: publication.currency,
      status: publication.status,
      tags: publication.tags,
      seller_id: seller.id,
      category_id: category.id,
      link: publication.link,
      shipping: publication.shipping,
      condition: publication.condition,
      pictures: publication.pictures,
      stock: publication.stock,
      address: publication.address,
      rating: publication.address,
    });
    res.status(201).json({
      status: 'created',
      data: newPublication,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.getAllPublications = catchAsync(async (req, res, next) => {
  const limit = parseInt(req.query.limit, 10) || 20;
  const page = parseInt(req.query.page, 10) || 1;
  const publications = await Publication.paginate({}, {limit, page});

  if (!publications) {
    return next(
      new AppError('There are no publications saved on the Data Base.', 404))
      }
   res.status(200).json({
      status: 'success',
      data: {publications}
    })
});


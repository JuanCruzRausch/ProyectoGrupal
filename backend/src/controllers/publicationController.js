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

exports.getAllPublications = (req, res) => {
  Publication.find({}, function (err, publications) {
    User.populate(
      publications,
      { path: 'seller' },
      function (err, publications) {
        Category.populate(
          publications,
          { path: 'category' },
          function (err, publications) {
            res.status(200).json({
              status: 'success',
              data: {
                publications,
              },
            });
          }
        );
      }
    );
  });
};

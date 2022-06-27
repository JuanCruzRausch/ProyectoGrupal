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

exports.getAllPublications = async (req, res) => {
  // const publications = await Publication.find({})
  //   .populate({ path: 'seller' })
  //   .populate({ path: 'category', select: 'name -_id' });

  // let pubs = publications.filter((e) => e.seller !== null);

  // res.status(200).json({
  //   status: 'success',
  //   total: pubs.length,
  //   data: {
  //     pubs,
  //   },
  // });

  let limit = req.query.limit * 1 || 20;
  let page = req.query.page * 1 || 1;
  const publications = await Publication.find({}, function (err, publications) {
    User.populate(
      publications,
      { path: 'seller' },
      function (err, publications) {
        Category.populate(
          publications,
          { path: 'category' },
          function (err, publications) {
            let pubs = publications.slice((page - 1) * limit, page * limit);
            res.status(200).json({
              status: 'success',
              data: {
                publications_total: publications.length,
                publications_per_page: pubs.length,
                nextPage:
                  publications.length / limit < page + 1 ? null : page + 1,
                prevPage: page - 1 < 1 ? null : page - 1,
                publications: pubs,
              },
            });
          }
        );
      }
    );
  });
};


exports.getPublicationID = async (req, res, next) => {
  const {id} = req.params
  if(!id) return next(new AppError('ID required', 400))
  try {
    const publication = await Publication.findOne({_id: id})
    res.status(200).json({
      status: 'success',
      data: publication
    })
  } catch (error) {
    return next(new AppError('Post not found', 404))
  }
}

exports.getPublicationidArray = async (req, res, next) => {
  const {idArray} = req.body
  if(!idArray) return next(new AppError('ID Array Required', 400))
  try {
    const result = [];
    for (let i = 0; i < idArray.length; i++) {
      result.push( await Publication.findOne({_id: idArray[i]}))
    }
    res.status(200).json({
      status: 'success',
      data: result
    })
  } catch (error) {
    return next(new AppError('Post not found', 404))
  }
}

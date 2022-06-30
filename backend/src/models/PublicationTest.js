const { Schema, model } = require('mongoose');
const validator = require('validator');

const publicationTestSchema = new Schema({
  title: {},
  description: {},
  pictures: {},
  price: {},
  promPrice: {},
  currency: {},
  status: {},
  seller: {},
  category: {},
  subCategory: {},
  sellerShipping: {},
  freeShipping: {},
  pickup: {},
  condition: {},
  date_created: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  last_update: {
    type: Date,
    default: () => Date.now(),
  },
  stock: {},
  totalSold: {},
  brand: {},
  location: {},
  visibility: {},
  questions: {},
});

const PublicationTest = model('PublicationTest', publicationTestSchema);

module.exports = PublicationTest;

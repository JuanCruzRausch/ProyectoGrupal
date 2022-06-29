const { Schema, model } = require('mongoose');
const validator = require('validator');

const categoryTestSchema = new Schema({
  name: {
    type: String,
  },
  subcategories: {
    type: [Schema.Types.ObjectId],
    ref: 'SubCategory',
  },
});

const CategoryTest = model('CategoryTest', categoryTestSchema);

module.exports = CategoryTest;

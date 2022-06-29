const { Schema, model } = require('mongoose');
const validator = require('validator');

const categoryTestSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: ' ' }),
      message: 'Category name should contain only letters',
    },
  },
  subcategories: {
    type: [Schema.Types.ObjectId],
    ref: 'SubCategory',
  },
});

const CategoryTest = model('CategoryTest', categoryTestSchema);

module.exports = CategoryTest;

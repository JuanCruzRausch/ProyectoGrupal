const { Schema, model } = require('mongoose');
const validator = require('validator');

const subCategory = new Schema({
  name: {
    type: String,
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: ' ' }),
      message: 'Category name should contain only letters',
    },
  },
  properties: [
    {
      nameprop: String,
      options: [String],
    },
  ],
});

const SubCategory = model('SubCategory', subCategory);

module.exports = SubCategory;

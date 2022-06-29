const { Schema, model } = require('mongoose');
const validator = require('validator');

const subCategory = new Schema({
  name: {
    type: String,
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

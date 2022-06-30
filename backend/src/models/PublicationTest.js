const { Schema, model } = require('mongoose');
const validator = require('validator');

const publicationTestSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please add a title that contains key words of the product"],
    validate: [
        validator.isAscii,'Title can have any character'
      ],
  maxlength: [100, 'A title must have less or equal then 100 characters'],
  minlength: [4, 'A title must have more or equal then 4 characters'],
  description: {
    type: String,
    required:[true, 'Please provide some description']
  },
  pictures: {
    type: Array,
    required:[true,'Please provide at least one picture']
  },
  price: {
    type: Number,
    required:[true,'Please provide any price']
  },
  promPrice: {
    type: Number,
    validate:{
      validator: function(el){
        return el < this.price;
      },
    },
    message: "A promotion price must be lower than the base price",
  },
  currency: {
    type: String,
    enum:['USD','ARS'],
    default: 'ARS',
  },
  status: {
    type: Boolean,
    default: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref:'Seller',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref:'CategoryTest',
  },
  subCategory: {
    type:Schema.Types.ObjectId,
    ref:'SubCategory',
  },
  sellerShipping: {
    type: Boolean,
    default: true,
  },
  freeShipping: {
    type: Boolean,
    default: false,
  },
  pickup: {
    type: Boolean,
    default: false,
  },
  condition: {
    type: String,
    enum:['new','used']
  },
  date_created: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  last_update: {
    type: Date,
    default: () => Date.now(),
  },
  stock: {
    type: Number,
    default: 1,
  },
  totalSold: {
    type: Number,
    default:0,
  },
  brand: {
    type: String,
    validate: [validator.isAlphanumeric, 'Brand can have letter and numbers only'],
  },
  location: {
    type: String,
    validate:[validator.isAlpha,'Please enter de name of the location of the product'],
  },
  visibility: {
    type: Boolean,
    default: false,
  },
  questions: {
    type: Schema.Types.ObjectId,
    ref:'Questions',
  },
});

const PublicationTest = model('PublicationTest', publicationTestSchema);

module.exports = PublicationTest;

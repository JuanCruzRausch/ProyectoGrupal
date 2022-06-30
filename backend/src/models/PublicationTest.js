const { Schema, model } = require('mongoose');
const validator = require('validator');

const publicationTestSchema = new Schema({
  title: {
    type: String,
    required: [
      true,
      'Please add a title that contains key words of the product',
    ],
    validate: [validator.isAscii, 'Title can have any character'],
    maxlength: [100, 'A title must have less or equal then 100 characters'],
    minlength: [4, 'A title must have more or equal then 4 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide some description'],
  },
  pictures: {
    type: Array,
    required: [true, 'Please provide at least one picture'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide any price'],
  },
  promPrice: {
    type: Number,
    validate: {
      validator: function (el) {
        return el < this.price;
      },
      message: 'A promotion price must be lower than the base price',
    },
  },
  currency: {
    type: String,
    enum: ['USD', 'ARS'],
    default: 'ARS',
  },
  status: {
    type: Boolean,
    default: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'CategoryTest',
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
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
    enum: ['new', 'used'],
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
    stockTotal: {
      type: Number,
      validate: {
        validator: function (el) {
          return el >= 0;
        },
        message: 'Stock can not be a negative value',
      },
    },
    options: [
      {
        combination: [
          {
            name: String,
            value: String,
          },
        ],
        stock: Number,
      },
    ],
  },
  totalSold: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
    validate: {
      validator: function (e) {
        return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
          e
        );
      },
      message: 'Brand should only contain numbers and letters',
    },
  },
  location: {
    type: String,
    validate: {
      validator: function (e) {
        return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
          e
        );
      },
      message: 'Location should only contain numbers and letters',
    },
  },
  visibility: {
    type: Number,
    enum: [1, 2, 3],
  },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: 'Questions',
  },
});

const PublicationTest = model('PublicationTest', publicationTestSchema);

module.exports = PublicationTest;

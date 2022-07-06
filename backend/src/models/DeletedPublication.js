const { Schema, model } = require('mongoose');

const deletedPublication = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  pictures: {
    type: Array
  },
  price: {
    type: Number
    
  },
  promPrice: {
    type: Number
  },
  earnings: {
    type: Number
  },
  currency: {
    type: String,
    enum: ['USD', 'ARS'],
    default: 'ARS'
  },
  status: {
    type: Boolean,
    default: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller'
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'CategoryTest'
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  },
  shipping: {
    shippingType: {
      type: String,
      enum: ['normal', 'free', 'seller', 'pickup'],
    },
    shippingPrice: {
      type: Number,
      default: 0,
    },
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
    },
  location:{
    type: String
  },
  visibility: {
    type: Number,
    enum: [1, 2, 3],
  },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: 'QandA',
  },
  transactions: {
    type: [Schema.Types.ObjectId],
    ref: 'Transaction',
  }
});

const DeletedPublication = model('DeletedPublication', deletedPublication);

module.exports = DeletedPublication;

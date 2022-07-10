const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  publication: {
    type: Schema.Types.ObjectId,
    ref: 'PublicationTest',
  },
  quantity:{
    type: Number
  },
  transactionAmount: {
    total_amount:{
      type: Number
    },
    seller_amount:{
      type: Number
    },
    platform_amount:{
      type: Number
    }
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'CommonUser',
  },
  dateOfBuy: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'fulfilled'],
    default: 'pending',
  },
  sellerRating: {
    type: Number,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  productRating: {
    type: Number,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;

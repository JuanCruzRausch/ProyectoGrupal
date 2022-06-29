const { Schema, model } = require('mongoose');

const sellerSchema = new Schema({
  user: {
    type: [Schema.Types.ObjectId],
    ref: 'CommonUser',
  },
  brand: {
    type: String,
  },
  social_net: {
    ig: String,
    fb: String,
    tw: String,
  },
  subsidiary: [
    {
      google_map: String,
      province: String,
      city: String,
      postalCode: String,
      street: String,
      number: String,
      reference: String,
    },
  ],
  active_pub: {
    type: [Schema.Types.ObjectId],
    ref: 'PublicationTest',
  },
  inactive_pub: {
    type: [Schema.Types.ObjectId],
    ref: 'PublicationTest',
  },
  reputation: {
    type: [Schema.Types.ObjectId],
    ref: 'Transaction',
  },
  transactionsTotal: {
    canceled: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  registration_date: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const Seller = model('Seller', sellerSchema);

module.exports = Seller;

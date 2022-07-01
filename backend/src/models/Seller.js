const { Schema, model } = require('mongoose');

const sellerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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
  subsidiary: {
    google_map: String,
    province: String,
    city: String,
    postalCode: String,
    street: String,
    number: String,
    reference: String,
  },
  active_pub: {
    type: [Schema.Types.ObjectId],
    ref: 'PublicationTest',
  },
  inactive_pub: {
    type: [Schema.Types.ObjectId],
    ref: 'PublicationTest',
  },
  reputation: {
    value: Number,
    votes: {
      type: [Schema.Types.ObjectId],
      ref: 'Transaction'
    }
  },
  transactionsTotal: {
    transactionHistory: {
      type: [Schema.Types.ObjectId],
      ref: 'Transaction',
    },
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
  non_answered: {
    type: [Schema.Types.ObjectId],
    ref: 'QandA',
  },
  answered: {
    type: [Schema.Types.ObjectId],
    ref: 'QandA',
  },
});

const Seller = model('Seller', sellerSchema);

module.exports = Seller;

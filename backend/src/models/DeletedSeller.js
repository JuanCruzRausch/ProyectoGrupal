const { Schema, model } = require('mongoose');

const deletedSeller = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'DeletedUser',
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
    ref: 'DeletedPublication',
  },
  inactive_pub: {
    type: [Schema.Types.ObjectId],
    ref: 'DeletedPublication',
  },
  reputation: {
    average: { type: Number },
    total_votes: [Number],
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
  total_earnings: {
    type: Number,
    default: 0,
  },
});

const DeletedSeller = model('DeletedSeller', deletedSeller);

module.exports = DeletedSeller;

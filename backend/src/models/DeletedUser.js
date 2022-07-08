const { Schema, model } = require('mongoose');
const validator = require('validator');

const deletedUser = new Schema({
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  password: {
    type: String,
  },
  nickname: {
    type: String,
  },
  country: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'You must provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  authorization: {
    roles: {
      type: [String],
      enum: ['common', 'buyer', 'seller', 'admin'],
      default: ['common'],
    },
  },
  address: {
    province: String,
    city: String,
    postalcode: Number,
    street: String,
    number: String,
    dpto: {
      floor: String,
      number: String,
    },
    reference: String,
  },
  phone: {
    type: String,
  },
  credit_card: {
    type: String,
    validate: [validator.isCreditCard, 'Credit card data is invalid'],
  },
  photo: {
    type: String,
  },
  registration_date: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  strike: {
    strikes: {
      type: [Schema.Types.ObjectId],
      ref: 'Strike',
    },
    strikes_total: Number,
  },
});

deletedUser.pre('save', function (next) {
  this.strike.strikes_total = this.strike.strikes.length;
  next();
});

const DeletedUser = model('DeletedUser', deletedUser);

module.exports = DeletedUser;

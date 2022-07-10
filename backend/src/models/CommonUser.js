const { Schema, model } = require('mongoose');
const validator = require('validator');

const commonUser = new Schema({
  name: {
    type: String,
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: ' ' }),
      message: 'Name must have letters only',
    },
    minlength: [2, 'User name must have at least 2 letters'],
    maxlength: [40, 'User name can only have 40 letters'],
  },
  lastname: {
    type: String,
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: ' ' }),
      message: 'Lastname must have letters only',
    },
    minlength: [2, 'User lastname must have at least 2 letters'],
    maxlength: [40, 'User lastname can only have 40 letters'],
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
    validate: [validator.isMobilePhone, 'Please provide your phone number'],
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
  blocked: {
    type: Schema.Types.Boolean
  }
});

commonUser.pre('save', function (next) {
  this.strike.strikes_total = this.strike.strikes.length;
  next();
});

const CommonUser = model('CommonUser', commonUser);

module.exports = CommonUser;

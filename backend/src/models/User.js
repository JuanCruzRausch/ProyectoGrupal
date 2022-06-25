const {Schema, model} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    validate: [validator.isAlpha, "Name must have letters only"],
    maxlength: [40, "A user name must have less or equal then 40 characters"],
    minlength: [4, "A user name must have more or equal then 4 characters"],
  },
  email: {
    type: String,
    required: [true, "You must provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "seller", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [8, "Your password must have more or equal then 8"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message:
        "The passwords you provide are not equal, please write it again!",
    },
  },
  registration_date: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  },
  address: {
    type: String,
    required: [true, "Please provide us your address"],
  },
  reputation: {
    level: {
      type: Number,
      min: [1, "Rating must be above 1.0"], 
      max: [5, "Rating must be below 5.0"], 
    },
    status: {
      type: String,
      enum: ['3_leader', '2_gold', '1_platinum']
    }    
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: 'Publication'
  },
  interest: {
    type: [Schema.Types.ObjectId],
    ref: 'Category'
  },
  transactionsTotal: {
    canceled: {
      type: Number,
      default: 0
    },
    completed: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  Account_verification: {
    type: Boolean,
    defautl: false
  }
});

const User = model("User", userSchema);

module.exports = User;

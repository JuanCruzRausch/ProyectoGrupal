const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
  totalSales: {
    type: Number,
    validate: [validator.isInt, "This field should contain numbers only"],
    default: 0,
  },
  adress: {
    type: String,
    required: [true, "Please provide us your adress"],
    validate: [
      validator.isAlphanumeric,
      "Adress must have letters and numbers only",
    ],
  },
  rating: {
    type: Number,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const {Schema} = require("mongoose");
const validator = require("validator");

const publicationSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    validate: [validator.isAlphanumeric, "Title must have letters and numbers only"],
    maxlength: [100, "A title must have less or equal then 100 characters"],
    minlength: [4, "A title must have more or equal then 4 characters"],
  },
  subtitle: {
    type: String,
  },
  descriptions: {
    type: String,
    required: [true, 'Please provide some description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide any price']
  },
  currency: {
    type: String,
    enum: ['USD', 'ARS'],
    default: 'ARS'
  },
  start_time: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  tags: {
    type: Array
  },
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  link: {
    type: String,
  },
  shipping: {
    type: Boolean,
    default: true
  },
  date_created: {
    type: Date
  },
  last_update: {
    type: Date
  },
  condition: {
    type: String,
    enum: ['new', 'used']
  },
  pictures: {
    type: Array,
    required: [true, 'Please provide some picture']
  },
  stock: {
    type: Number,
    default: 1,
  },
  address: {
    type: String,
    required: [true, "Please provide us your address"],
  },
  rating: {
    type: Number,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
});

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;

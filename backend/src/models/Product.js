const { Schema }= require("mongoose");


const productSchema = new Schema({
  name: String,
  image: String,
  category: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Product", productSchema);

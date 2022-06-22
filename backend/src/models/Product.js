const { Schema }= require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
  name: String,
  image: String,
  category: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Product", productSchema);

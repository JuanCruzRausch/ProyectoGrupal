const mongoose = require('mongoose');


const product = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    category: String,
    description: String,
    price: Number

})

module.exports = mongoose.model("Product", product)

const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    pro_title: String,
    pro_price: Number,
    pro_desc: String
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 
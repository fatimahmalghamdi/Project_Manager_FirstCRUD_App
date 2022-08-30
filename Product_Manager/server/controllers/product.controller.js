const Product = require("../models/product.model")

//get all product:
function getallproducts(req, res){
    Product.find()
    .then(allproducts => res.json({
        records_count: allproducts.length,
        products: allproducts
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the data"}))
}

//add new product:
function addnewProduct (req, res) {
    Product.create(req.body)
        .then(newlycreatedproduct => res.json(newlycreatedproduct))
        .catch(err => res.json({error: true, message: "Faild to crate user"}))
}

//get product by id:
function getProductById(req, res){
    const { product_id } = req.params;
    Product.find({_id: product_id})
    .then(theproduct => res.json({
        product: theproduct
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the product"}))
}

//update product by id:
function updateProductById (req, res) {
    const { product_id } = req.params;
    Product.updateOne({_id: product_id}, req.body)
        .then(updateproduct => res.json(updateproduct))
        .catch(err => res.json({error: true, message: "Faild to update product"}))
}

//delete product by id:
function deleteProductById (req, res) {
    const { product_id } = req.params;
    Product.deleteOne({_id: product_id})
        .then((result) => res.json(result))
        .catch(err => res.json({error: true, message: "Faild to delete product"}))
}


module.exports = {
    getallproducts,
    addnewProduct,
    getProductById,
    updateProductById,
    deleteProductById
}
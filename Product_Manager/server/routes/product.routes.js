const ProductController = require("../controllers/product.controller")

function registerProductRoutes(app)
{
    app.get("/api/product", ProductController.getallproducts)
    app.post("/api/product/new", ProductController.addnewProduct)
    app.get("/api/product/:product_id", ProductController.getProductById)
    app.put("/api/product/update/:product_id", ProductController.updateProductById)
    app.delete("/api/product/delete/:product_id", ProductController.deleteProductById)
}

module.exports = registerProductRoutes
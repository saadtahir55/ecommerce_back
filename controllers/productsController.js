const Products = require('../model/products');

const productsControls = (req, res) => {
    try {
        Products.searchProducts(req, res)
    }
    catch (error) {
        res.status(500).send("Intenal Server Error", error);
    }
}

const productsIdControls = (req, res) => {
    try {
        Products.searchProductById(req, res)
    }
    catch (error) {
        res.status(500).send("Intenal Server Error", error);
    }
}

const categoriesControls = (req, res) => {
    try {
        Products.getCategories(req, res)
    }
    catch (error) {
        res.status(500).send("Intenal Server Error", error);
    }
}

module.exports = {
    productsControls,
    productsIdControls,
    categoriesControls
}
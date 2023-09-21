const connection = require('../config/db_connect');

class ProductDetailData {
    constructor(){}

    searchProducts(req, res) {
        let productsQuery = 'SELECT * FROM productsCards';
        connection.query(productsQuery, (err, result) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(result);
        });
    }

    searchProductById (req, res) {
        let id = req.params.id;
        let productIdQuery = 'SELECT * FROM productsCards WHERE id = ?';
        connection.query(productIdQuery, [id], (err, result) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(result);
        });
    }

    getCategories (req, res) {
        let categoriesQuery = 'SELECT * FROM categories';
        connection.query(categoriesQuery , (err, result)=>{
            if(err){
                res.status(404).send(err);
            }
            res.status(200).json(result);
        })
    }
}

module.exports = new ProductDetailData();
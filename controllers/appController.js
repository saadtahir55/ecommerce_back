const Products = require('../model/appData');

const navbarControls = (req, res) => {
    try {
        Products.navbarData(req, res)
    }
    catch (error) {
        res.status(500).send("Intenal Server Error", error);
    }
}

module.exports = {
    navbarControls
}
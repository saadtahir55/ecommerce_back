const express = require('express');
const { productsControls , productsIdControls, categoriesControls} = require('../controllers/productsController');
const route = express.Router();

route.get('/', productsControls);
route.get('/:id', productsIdControls);
route.get('/', categoriesControls);

module.exports = route;
 
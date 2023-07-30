const express = require('express');
const { productsControls , productsIdControls} = require('../controllers/productsController')
const route = express.Router();

route.get('/', productsControls)
route.get('/:id', productsIdControls)

module.exports = route;

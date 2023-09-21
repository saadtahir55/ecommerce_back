const express = require('express');
const { categoriesControls } = require('../controllers/productsController');
const route = express.Router();

route.get('/', categoriesControls);

module.exports = route;
 
const express = require('express');
const { navbarControls } = require('../controllers/appController');
const route = express.Router();

route.get('/', navbarControls);

module.exports = route;
 
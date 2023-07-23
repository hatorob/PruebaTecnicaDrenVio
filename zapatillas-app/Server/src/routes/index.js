const getPrice = require('../controllers/getPrice.js');
const getProducts = require('../controllers/getProducts.js');

const express = require("express");
const routes = express.Router();

routes.get("/products", getProducts);
routes.get('/price/:id/:name_product', getPrice);


module.exports = routes;
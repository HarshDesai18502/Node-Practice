const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');


router.post('/product',productController.postAddProduct);

router.get('/add-product',productController.getAddProduct);

module.exports = router;
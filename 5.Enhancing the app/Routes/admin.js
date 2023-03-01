const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');


router.post('/product',adminController.postAddProduct);

router.get('/add-product',adminController.getAddProduct);

router.get('/products',adminController.getAdminProducts);

router.post('/products/edit',adminController.updateProduct);

router.post('/edit',adminController.finishUpdate);

// router.post('/delete',adminController.deleteProduct);

module.exports = router;
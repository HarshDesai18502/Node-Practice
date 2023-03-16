const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const products = [];

router.post('/product',(req,res,next) => {
    res.redirect('/');
    let product = req.body.productName;    
    console.log(product);
    products.push(product);
    fs.appendFile('products.txt',product, function(err) {
        if(err) {
            console.log(err);
        }
    });


router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

exports.routes = router;
exports.product = products;
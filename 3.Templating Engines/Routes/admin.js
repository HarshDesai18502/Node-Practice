const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.post('/product',(req,res,next) => {
    res.redirect('/');
    let product = {
        title:req.body.productName,
        imageUrl:req.body.imageUrl
    };    
    console.log(product);
    products.push(product);
    console.log(products);
})

router.get('/add-product',(req,res,next) => {
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    // res.send('Page under construction');
    res.render('add-product');
});

exports.routes = router;
exports.product = products;
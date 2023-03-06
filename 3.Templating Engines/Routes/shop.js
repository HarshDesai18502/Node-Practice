const express = require('express');
const path = require('path');
const adminData = require('./admin')
const router = express.Router();

router.get('/',(req,res,next) => {
    // console.log(adminData.product);
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    const products = adminData.product;
    res.render('shop',{prods:products,title:'Shop'});
})

module.exports = router;
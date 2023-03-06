// const products = [];

const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('add-product');
};

exports.postAddProduct = (req,res,next) => {
    res.redirect('/');
    let product = new Product(req.body.productName,req.body.imageUrl);
    product.save();
}

exports.getProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop',{prods:products,title:'Shop'});
}


// const products = [];

const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product');
};

exports.postAddProduct = (req,res,next) => {
    res.redirect('/products');
    let product = new Product(req.body.productName,req.body.imageUrl);
    product.save();
}

exports.getProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop/product-list',{prods:products, title:'Products'});
}

exports.getIndexPage = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop/index',{prods:products,title:'Shop'});
}

exports.getAdminProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('admin/products',{prods:products, title:'Admin Products'});
}
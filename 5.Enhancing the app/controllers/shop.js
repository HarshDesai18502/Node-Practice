const cart = [];


const Product = require('../models/product');


//To get Index Page
exports.getIndexPage = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop/index',{prods:products,title:'Shop'});
}

//To get all the products
exports.getProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop/product-list',{prods:products, title:'Products'});
}

//To get Sinfle Product
exports.getProduct = (req,res,next) => {
    let prodId = req.params.productId;
    let products = Product.fetchAll();
    let finalProduct;
    let product = products.find(product => product.id==prodId);
    console.log(product);
    res.render('shop/view-product',{prods:product});
}

//For cart
exports.getCart = (req,res,next) => {
    res.render('shop/cart',{cartItems:cart});
}

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    let products = Product.fetchAll();
    let product = products.find(product => product.id==prodId);
    
    const found = cart.some(product => product.id == prodId);
    console.log(found);
    if (!found) {
        cart.push(product);
    }

    res.redirect('/cart');
}


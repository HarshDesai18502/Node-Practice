// const cart = [];


const Product = require('../models/product');
const Cart = require('../models/cart');

const logger = require('../logger');


//To get Index Page
exports.getIndexPage = (req,res,next) => {
    let products = Product.fetchAll();
    // const checkLogin = req.get('cookie').split('=')[1];
    res.render('shop/index',{prods:products,title:'Shop', isLoggedIn:req.session.isLoggedIn});
}

//To get all the products
exports.getProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('shop/product-list',{prods:products, title:'Products',isLoggedIn:req.session.isLoggedIn});
    logger.customerLogger.log('info','user successfully fetched products');
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
    const cartProducts = Cart.fetchAll();
    res.render('shop/cart',{cartItems:cartProducts,isLoggedIn:req.session.isLoggedIn});
}

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    let products = Product.fetchAll();
    console.log(products);
    let product = products.find(product => product.id==prodId);
    console.log(product);

    const cartItems = Cart.fetchAll();
    
    const found = cartItems.some(product => product.id == prodId);
    console.log(found);
    if (!found) {
        Cart.save(product);
    }

    res.redirect('/cart');
}


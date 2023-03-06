// const cart = [];


const Product = require('../models/product');
const Cart = require('../models/cart');

const logger = require('../logger');


//To get Index Page
exports.getIndexPage = (req,res,next) => {
    Product.fetchAll()
    .then(([rows,data]) => {
        res.render('shop/index',{prods:rows,title:'Shop', isLoggedIn:req.session.isLoggedIn});
    })
    .catch(err => console.log(err));
    // const checkLogin = req.get('cookie').split('=')[1];
    
}

//To get all the products
exports.getProducts = (req,res,next) => {
    Product.fetchAll()
    .then(([rows,data]) => {
        res.render('shop/product-list',{prods:rows,title:'Products', isLoggedIn:req.session.isLoggedIn});
    })
    .catch(err => console.log(err));
    // let products = Product.fetchAll();
    // res.render('shop/product-list',{prods:products, title:'Products',isLoggedIn:req.session.isLoggedIn});
    logger.customerLogger.log('info','user successfully fetched products');
}

//To get Single Product
exports.getProduct = (req,res,next) => {
    let prodId = req.params.productId;

    Product.findById(prodId)
    .then(([row]) => {
        res.render('shop/view-product',{prods:row[0]});
    })
    .catch(err =>{
        console.log(err);
    })

    

    // let products = Product.fetchAll();
    // let finalProduct;
    // let product = products.find(product => product.id==prodId);
    // console.log(product);
    // res.render('shop/view-product',{prods:product});
}

//For cart
exports.getCart = (req,res,next) => {
    const cartProducts = Cart.fetchAll();
    res.render('shop/cart',{cartItems:cartProducts,isLoggedIn:req.session.isLoggedIn});
}

exports.postCart = async (req,res,next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    let products = await Product.fetchAll().then(([rows,data]) => {
        return rows;
    });
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


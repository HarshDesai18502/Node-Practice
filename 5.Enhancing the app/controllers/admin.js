
const Product = require('../models/product');

//For Add-Product Page
exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product');
};

exports.postAddProduct = (req,res,next) => {
    res.redirect('/products');
    let product = new Product(req.body.productName,req.body.imageUrl,req.body.price,req.body.description);
    product.save();
}

//For getting all the products on Admin-side
exports.getAdminProducts = (req,res,next) => {
    let products = Product.fetchAll();
    res.render('admin/products',{prods:products, title:'Admin Products'});
}

//To Update the product
exports.updateProduct = (req,res,next) => {
    const prodId = req.body.productId;
    let products = Product.fetchAll();
    let product = products.find(product => product.id==prodId);
    res.render('admin/edit-product',{prods:product});
}

exports.finishUpdate = async (req,res,next) => {
    let products = Product.fetchAll();
    let prodId= req.body.productId;
    
    let product = await products.find(product => product.id==prodId);

    product.title = req.body.title;
    product.imageUrl = req.body.imageUrl;
    product.price = req.body.price;
    product.description = req.body.description;

    res.redirect(`/products/${prodId}`);
}

// exports.deleteProduct = (req,res,next) => {
//     let products = Product.fetchAll();
//     let prodId= req.body.productId;
//     console.log(prodId);

//     let index = products.findIndex(product => product.id == prodId);
//     console.log(index);

//     res.redirect('/');
// }
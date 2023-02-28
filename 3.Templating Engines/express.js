const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const expressHbs = require('express-handlebars');

const adminData = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const exp = require('constants');

const app = express();

// app.engine('handlebars',expressHbs());
// app.set('view engine','handlebars');
app.set('view engine','ejs');

// app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(shopRoutes);
app.use('/admin',adminData.routes);

app.use((req,res,next) => {
    res.status(404);
    // res.sendFile(path.join(__dirname,'views','page-not-found.html'));
    res.render('page-not-found', { pageTitle:'Page Not Found'});
})

app.listen(3000);



const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const expressHbs = require('express-handlebars');

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const errorController = require('./controllers/error');

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
app.use('/admin',adminRoutes);

app.use(errorController.pageNotFound);

app.listen(3000);



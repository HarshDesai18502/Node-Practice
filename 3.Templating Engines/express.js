const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminData = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const exp = require('constants');

const app = express();

app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(shopRoutes);
app.use('/admin',adminData.routes);

app.use((req,res,next) => {
    res.status(404);
    res.sendFile(path.join(__dirname,'views','page-not-found.html'));
})

app.listen(3000);



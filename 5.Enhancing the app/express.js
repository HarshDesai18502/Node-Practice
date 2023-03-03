const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const expressHbs = require('express-handlebars');

const session = require('express-session');

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const authRoutes = require('./Routes/auth');

const errorController = require('./controllers/error');

const exp = require('constants');

const apiErrorHandler = require('./error/errorHandler');

const app = express();

// app.use(helmet());
app.use(morgan('tiny'));

const corsOptions  = {
    origin: ['https://example.com','https://example2.com'],
    OptionSuccessStatus: 200,
}

app.use(cors(corsOptions));



// app.engine('handlebars',expressHbs());
// app.set('view engine','handlebars');
app.set('view engine','ejs');

// app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(session({secret: 'my secret', resave:false, saveUninitialized: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);


app.use(errorController.pageNotFound);

// app.use(apiErrorHandler);



app.listen(3000);





var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//APP CONFIG
//set ejs templating engine
app.set('view engine', 'ejs');
//set public directory for static assets
app.use(express.static('public'));
//use bodyParser to get values from forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//use method-override to update form methods
app.use(methodOverride("_method"));
//log requests to the console
app.use(morgan('dev'));
//read coookies required for auth
app.use(cookieParser());

//CONFIG FOR AUTH
//require passport config
require('./config/passport')(passport);
// required for passport
app.use(session({
                  secret: 'thisisthesessionsecrettoserialiseuserdetails',
                  saveUninitialized: true,
                  resave: true
                })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//DB SET UP
// var dburl = process.env.DATABASEURL || 'mongodb://ukpn:protothon@ds019053.mlab.com:19053/ukpn'
//Connect to mongoose
mongoose.connect('mongodb://ukpn:protothon@ds019053.mlab.com:19053/ukpn');

//SET UP ROUTES
//Import routes
require('./app/routes.js')(app, passport);

//SET PORT AND RUN SERVER
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Looks like we're cooking on port " + port);

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//APP CONFIG
//set ejs templating engine
app.set('view engine', 'ejs');
//set public directory for static assets
app.use(express.static('public'));
//use bodyParser to get values from forms
app.use(bodyParser.urlencoded({extended: true}));
//use method-override to update form methods
app.use(methodOverride("_method"));


//DB SET UP
//Connect to mongoose
//mongoose.connect('mongodb://localhost/insertappnamehere');

//SET UP ROUTES
//Home route
app.get('/', function(req, res) {
  res.render("home");
});

//Incident route
app.get('/incidents/123', function(req, res) {
  res.render("incident");
});

//Confirmation route
app.get('/confirmation', function(req, res) {
  res.render("confirmation");
});

//SET PORT AND RUN SERVER
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Looks like we're cooking on port " + port);

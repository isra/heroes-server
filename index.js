var mongoose = require('mongoose');
var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

mongoose.connect('mongodb://localhost:27017/heroes');

app.models = require('./models/index');

_.each(require('./routes/index'), function(controller, route){

	app.use(route, controller(app, route));

});

app.listen(3000, function(){
	console.log('app heroes serve running in port 3000');
});
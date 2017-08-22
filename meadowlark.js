// Set up express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Grab Fortune
var fortune = require('./lib/fortune.js');
var weather = require('./lib/weatherData.js');

// set up for Handlebars.js
var handlebars = require('express3-handlebars').create({
	defaultLayout:'main',
	helpers: {
		section: function(name,options){
			if(!this._sections){
				this._sections={};
			}
			this._sections[name] = options.fn(this);
			return null;
		}
	}
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');




// Set up which port we want
app.set('port', process.env.PORT || 3000);

// Set up static middleware to handle static clientside files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//Set up automated testing middleware

app.use(function(req,res,next){
	res.locals.showTests = app.get('env') !== 'production' &&
			req.query.test === '1';
			next();
});

app.use(function(req,res,next){
	if(!res.locals.partials){
		res.locals.partials = {};
	}
		res.locals.partials.weather= weather.getWeatherData();
		next();
	
});

//Routes


app.get('/', function(req,res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about', { fortune: fortune.getFortune(),
						   pageTestScript: '/qa/tests-about.js'});
});

app.get('/tours/hood-river',function(req,res){
	res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});

app.get('/newsletter', function(req, res){
	//we will learn about CSRF later.... for now, we just
	//provide a dummy value
	res.render('newsletter',{csrf:'CSRF token goes here'});
});
app.post('/process', function(req, res){
	console.log('Form (from querystring): ' + req.query.form);
	console.log('CSRF token (from hidden form field): ' + req.body._csrf);
	console.log('Name (from visible form field): ' + req.body.name);
	console.log('Email (from visible form field): ' + req.body.email);
	res.redirect(303, '/thank-you');
});

app.get('/thank-you',function(req,res){
	res.render('thank-you');
});
//custom 404 page (middleware)
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

//custom 500 page (middleware)
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});



app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') +'; press Ctrl-C to terminate');
});
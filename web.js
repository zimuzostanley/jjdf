var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/clement', function(req, res) {
	res.render('clement', {});
});

app.get('/chinelo', function(req, res) {
	res.render('chinelo', {});
});

app.get('/how-we-started', function(req, res) {
	res.render('how-we-started', {});
});

app.get('/team', function(req, res) {
	res.render('team', {});
});

app.get('/speech', function(req, res) {
	res.render('speech', {});
});

app.get('/contact', function(req, res) {
	res.render('contact', {});
});

app.get('/donate', function(req, res) {
	res.render('donate', {});
});

app.get('/', function(req, res) {
	res.render('index', {});
});



http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
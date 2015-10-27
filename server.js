//Server side JS

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./models');
// config codes
app.set ('view engine', 'ejs');
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (request, response) {
	response.render('index', {users: users});
});
mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
  	'mongodb://localhost/project1cyoa');
var User =require('./models/user.js');

//USER INDEX ?
app.get('/users', function (request, response) {
	User.find().exec(function (err, users) {
		console.log(users);
		response.render("intro1", { users: users });
	});
});

//USERLIST SHOW
app.get('/users/:id', function (request, response) {
	User.findById(request.params.id).exec( function (err, user) {
	});
	response.render('user-show', {user: user});
});

// USERLIST CREATE before db (totally works(actively appends entries to the html ul))
// app.post('/users', function (request, response) {
// 	var user = request.body;
// 	console.log(user)
// 	users.push(user);
// 		response.status(200).json(user);
// });

//USERLIST CREATE after db (totally broken(loses its shit at the .post() function on the clinet.js page))
app.post('/users', function (request, response) {
	var user = request.body;
	console.log(user);
	// var user = request.body;
	User.create(user, function (err, user) {
		if(err) { console.log(err);}
		// response.status(200).json(user);
		response.id = user.id;
	});
	response.send(user);
});

// USERLIST DELETE 
app.delete('/users/:id', function (request, response) {
	User.findById(request.params.id).exec( function (err, user) {
		if(err) { console.log(err); }
		user.remove();
		 response.status(200);
	});
});

// USERLIST UPDATE
// USERLIST EDIT
// USERLIST NEW



app.listen(process.env.PORT || 5000, function (request, response) {
	console.log("The harvest is over, the summer is ended, and we are not saved");
});

//Server side JS

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./models');
var session = require('express-session');


// config codes
app.set ('view engine', 'ejs');
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (request, response) {
	response.render('index');
});
mongoose.connect(
	process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
  	'mongodb://localhost/project1cyoa');
var User =require('./models/user.js');

app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'SuperSecretCookie',
	cookie: { maxAge: 600000 }
}));

//USER INDEX ?
app.get('/users', function (request, response) {
	User.find().exec(function (err, users) {
		//console.log(users);
		response.render("intro1", { users: users });
	});
});

//USERLIST SHOW
app.get('/users/:id', function (request, response) {
	User.findById(request.params.id).exec( function (err, user) {
	response.render('user-show', { user: user});
	});
});


//USERLIST CREATE 
app.post('/users', function (request, response) {
	var user = request.body;
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
		user.remove();
		response.status(200).send("deleted user");
	});

});

// USERLIST UPDATE
// USERLIST EDIT
// USERLIST NEW

//Signup stuff
app.post('/signup', function (request, response) {
	var user = request.body;
	User.createSecure(user.emailz, user.passwordz, function (err, user) {
		request.session.userId = user._id;
		response.json({user: user, msg: "USER CREATED"});
	});
});

app.get('/current-user', function (request, response) {
	response.json({ user: request.session.user });
});




app.listen(process.env.PORT || 5000, function (request, response) {
	console.log("The harvest is over, the summer is ended, and we are not saved");
});

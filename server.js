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

//USER LIST
var users = [
	{email: "wtf@bbq", username: "ShitbagSam", password: "secret", id: 1},
	{email: "bbq@wtf", username: "ScumbagSteve", password: "secret", id: 2},
	{email: "wtf@wtf", username: "FucktardFrank", password: "secret", id: 3},
	{email: "bbq@bbq", username: "DickheadDave", password: "secret", id: 4}];

//USER INDEX ?
app.get('/users', function (request, response) {
	response.render("intro1", {users: users});
});

//USERLIST SHOW
app.get('/users/:id', function (request, response) {
	var user = users[request.params.id];
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
	});
	response.send(user);
});

// USERLIST DELETE 
// USERLIST UPDATE
// USERLIST EDIT
// USERLIST NEW



app.listen(process.env.PORT || 5000, function (request, response) {
	console.log("The harvest is over, the summer is ended, and we are not saved");
});

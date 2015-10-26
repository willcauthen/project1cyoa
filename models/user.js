var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	// email: String,
	// username: String,
	// password: String,
	// id: Number
	body: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
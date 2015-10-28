var mongoose = require('mongoose');
var Schema = mongoose.Schema;
bcrypt = require('bcrypt');
salt = bcrypt.genSaltSync(10);

var UserSchema = new Schema({
	email: String,
	username: String,
	passwordDigest: String,
	body: String
});

UserSchema.statics.createSecure = function(email, password, callback) {
	var user = this;
	bcrypt.genSalt(function (err, Salt) {
		bcrypt.hash(password, salt, function (err, hash) {
			console.log(hash);
			user.create({
				email: email,
				passwordDigest: hash,
			}, callback);
			});
		});
};



var User = mongoose.model('User', UserSchema);
module.exports = User;
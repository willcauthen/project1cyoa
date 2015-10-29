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

UserSchema.statics.authenticate =function (email, password, callback) {
	this.findOne({ email: email }, function (err, user) {
		console.log(user);
		if(!user) {
			callback ("no user with email " + email, null);
		} else if (user.checkPassword(password)) {
			callback(null, user);
		}
	});
};

UserSchema.methods.checkPassword = function(password) {
	return bcrypt.compareSync(password, this.passwordDigest);
};


var User = mongoose.model('User', UserSchema);
module.exports = User;
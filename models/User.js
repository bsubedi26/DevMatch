var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../config/orm.js');
var bcrypt = require('bcrypt-nodejs');

//User model main function
function User(userObj) {
	this.username = userObj.username
	this.password = bcrypt.hashSync(userObj.password, null, null)
}
//Export user model
module.exports = User;

module.exports.saveUser = function(userObj, callback){
	orm.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
};
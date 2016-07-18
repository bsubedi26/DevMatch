
//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {
	addUserToDB: function (userObj, callback) {
    connection.query('INSERT INTO users_table SET ?', userObj, function(err, results){
    if (err) return callback(false, err)
    callback(true, null)
    });
  },

  findUser: function(username, callback) {
    connection.query('SELECT * FROM users_table WHERE ?', {username: username}, function(err, user){
    callback(err, user)
    })
  }
};

module.exports = orm;

//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {

    viewAll: function(table) {
    	return new Promise(function(resolve, reject) {
    		//may need to do A.ID instead of A.Key format
	        var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.Key = B.Key';
	        connection.query(queryString, function(err, result) {
	            resolve(result);
	        });
    	});
    },
    addUserToDB: function(table) {
    	return new Promise(function(resolve, reject) {
	        var queryString = 'INSERT INTO' + table + '(first_name, last_name, email, address, phone_number, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?)';
	        connection.query(queryString, [req.body.first_name, req.body.last_name, req.body.email, req.body.address, req.body.phone_number, req.body.linkedin, req.body.github], function(err, result) {
	            resolve(result);
	        });
    	});
    },
    addSkillsToDB: function(table) {
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO' + table + '(CSS, HTML, Ruby_Rails, Java, Javascript, MySQL, React, PHP, Groovy_Grails, C_plus_plus, others) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    		connection.query(queryString, [req.body.CSS, req.body.HTML, req.body.Ruby_Rails, req.body.Java, req.body.Javascript, req.body.MySQL, req.body.React, req.body.PHP, req.body.Groovy_Grails, req.body.C_plus_plus, req.body.others], function(err, result){
    			resolve(result);
    		});
    	});
    },
    // un .then versions, will switch above

  // findUser: function(username, callback) {
  //   connection.query('SELECT * FROM users_table WHERE ?', {username: username}, function(err, user){
  //   callback(err, user)
  //   })
  // },

   /* For the next 2 functions below, I need to learn how to tie the User table with the skills table 
    together by id 
    addUsers: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO users WHERE id = ?';
    		connection.query(queryString, function(err, result){
    			resolve(result);
    		})
    	})
    },*/
/*
    addSkills: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO skills WHERE id = ?';
    		connection.query(queryString, function(err, result){
    			resolve(result);
    		})
    	})
    },
    
   	addCompanyInfo: function(score){
   		return new Promise(function(resolve, reject){
   			var queryString = 'INSERT INTO recruiter';
   			connection.query(queryString, function(err, result){
   				resolve(result);
   			})
   		})
   	},

   	*/

};

module.exports = orm;

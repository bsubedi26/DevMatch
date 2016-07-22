//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {

    // viewAll: function(table) {
    // 	return new Promise(function(resolve, reject) {
    // 		//may need to do A.ID instead of A.Key format
	   //      var queryString = 'SELECT * FROM ' + table + ' A LEFT JOIN skills B ON A.ID = B.ID';
	   //      connection.query(queryString, function(err, result) {
	   //          resolve(result);
	   //      });
    // 	});
    // },
    // addUserToDB: function(table) {
    // 	return new Promise(function(resolve, reject) {
	   //      var queryString = 'INSERT INTO' + table + '(first_name, last_name, email, address, phone_number, linkedin, github) VALUES (?, ?, ?, ?, ?, ?, ?)';
	   //      connection.query(queryString, [req.body.first_name, req.body.last_name, req.body.email, req.body.address, req.body.phone_number, req.body.linkedin, req.body.github], function(err, result) {
	   //          resolve(result);
	   //      });
    // 	});
    // },
    addSkillsToDB: function(table, first_name, last_name, email, address, phone_number, linkedin, github, CSS, HTML, Ruby_Rails, Java, Javascript, MySQL, React, PHP, Groovy_Grails, C_plus_plus, others) {
    	console.log('looking for ' + CSS + " " + HTML);
    	return new Promise(function(resolve, reject){
    		if (CSS == null) {
    			CSS = "false"
    		} else {
    			CSS = "true"
    		}
    		if (HTML == null) {
    			HTML = "false"
    		} else {
    			HTML = "true"
    		}
    		if (Ruby_Rails == null) {
    			Ruby_Rails = "false"
    		} else {
    			Ruby_Rails = "true"
    		}
    		if (Java == null) {
    			Java = "false"
    		} else {
    			Java = "true"
    		}
    		if (Javascript == null) {
    			Javascript = "false"
    		} else {
    			Javascript = "true"
    		}
    		if (MySQL == null) {
    			MySQL = "false"
    		} else {
    			MySQL = "true"
    		}
    		if (React == null) {
    			React = "false"
    		} else {
    			React = "true"
    		}
    		if (PHP == null) {
    			PHP = "false"
    		} else {
    			PHP = "true"
    		}
    		if (Groovy_Grails == null) {
    			Groovy_Grails = "false"
    		} else {
    			Groovy_Grails = "true"
    		}
    		if (C_plus_plus == null) {
    			C_plus_plus = "false"
    		} else {
    			C_plus_plus = "true"
    		}
    		var queryString = 'INSERT INTO ' + table + ' SET ?';
    		connection.query(queryString, {first_name: first_name, last_name: last_name, email: email, address: address, phone_number: phone_number, linkedin: linkedin, github: github, CSS: CSS, HTML: HTML, Ruby_Rails: Ruby_Rails, Java: Java, Javascript: Javascript, MySQL: MySQL, React: React, PHP: PHP, Groovy_Grails: Groovy_Grails, C_plus_plus: C_plus_plus, others: others}, function(err, result){
    			if (err) throw err;
    			resolve(result);
    		});
    	});
    },
    addScoreToDB: function(table, scoreResult) {
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO ' + table + ' (personality_type) VALUES (?)';
    		connection.query(queryString, [scoreResult], function(err, result){
    			if (err) throw err;
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
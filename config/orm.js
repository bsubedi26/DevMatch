//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {

     viewAll: function(table) {
    	return new Promise(function(resolve, reject) {
    		//may need to do A.ID instead of A.Key format, 'SELECT * FROM ' + table + ' A LEFT JOIN skills B ON A.ID = B.ID'
	        var queryString = 'SELECT * FROM ' + table + ' A LEFT JOIN scores B ON A.id = B.id';
	        connection.query(queryString, function(err, result) {
	            resolve(result);
	        });
    	});
    },
    //selectAll: function(table) {
    //	return new Promise(function(resolve, reject) {
	   //     // var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.Key = B.Key';

    //		//may need to do A.ID instead of A.Key format
	   //     var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.ID = B.ID';

	   //     connection.query(queryString, function(err, result) {
	   //         if (err) throw err;
    //          resolve(result);
	   //     });
    //	});
    //},
    addUserToDB: function (userObj, callback) {
	    connection.query('INSERT INTO users_table SET ?', userObj, function(err, results) {
	    if (err) return callback(false, err);
	    callback(true, null);
	    });
	  },
	
    findUser: function(username, callback) {
	    connection.query('SELECT * FROM users_table WHERE ?', {username: username}, function(err, user) {
	    callback(err, user);
	    })
	  },
    addSkillsToDB: function(table, first_name, last_name, email, address, phone_number, linkedin, github, CSS, HTML, Ruby_Rails, Java, Javascript, MySQL, React, PHP, Groovy_Grails, C_plus_plus, others) {
    	console.log('looking for ' + CSS + " " + HTML);
    	return new Promise(function(resolve, reject){
    		if (CSS == null) {
    			CSS = "No"
    		} else {
    			CSS = "Yes"
    		}
    		if (HTML == null) {
    			HTML = "No"
    		} else {
    			HTML = "Yes"
    		}
    		if (Ruby_Rails == null) {
    			Ruby_Rails = "No"
    		} else {
    			Ruby_Rails = "Yes"
    		}
    		if (Java == null) {
    			Java = "No"
    		} else {
    			Java = "Yes"
    		}
    		if (Javascript == null) {
    			Javascript = "No"
    		} else {
    			Javascript = "Yes"
    		}
    		if (MySQL == null) {
    			MySQL = "No"
    		} else {
    			MySQL = "Yes"
    		}
    		if (React == null) {
    			React = "No"
    		} else {
    			React = "Yes"
    		}
    		if (PHP == null) {
    			PHP = "No"
    		} else {
    			PHP = "Yes"
    		}
    		if (Groovy_Grails == null) {
    			Groovy_Grails = "No"
    		} else {
    			Groovy_Grails = "Yes"
    		}
    		if (C_plus_plus == null) {
    			C_plus_plus = "No"
    		} else {
    			C_plus_plus = "Yes"
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

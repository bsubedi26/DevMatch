
//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {
	//can use this to select all data from any table
	/* SELECT <select_list>
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key */
    selectAll: function(table) {
    	return new Promise(function(resolve, reject) {
	        // var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.Key = B.Key';

    		//may need to do A.ID instead of A.Key format
	        var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.ID = B.ID';

	        connection.query(queryString, function(err, result) {
	            if (err) throw err;
              resolve(result);
	        });
    	});
    },
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
  addSkillsToDB: function(table, CSS, HTML, Ruby_Rails, Java, Javascript, MySQL, React, PHP, Groovy_Grails, C_plus_plus, others, personality_type) {
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
        connection.query(queryString, {CSS: CSS, HTML: HTML, Ruby_Rails: Ruby_Rails, Java: Java, Javascript: Javascript, MySQL: MySQL, React: React, PHP: PHP, Groovy_Grails: Groovy_Grails, C_plus_plus: C_plus_plus, others: others, personality_type: personality_type}, function(err, result){
          if (err) throw err;
          resolve(result);
        });
      });
    },

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

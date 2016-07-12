
//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {
	//can use this to select all data from any table
    selectAll: function(table) {
    	return new Promise(function(resolve, reject) {
	        var queryString = 'SELECT * FROM ' + table;
	        connection.query(queryString, function(err, result) {
	            resolve(result);
	        });
    	});
    }
    /* For the next 2 functions below, I need to learn how to tie the User table with the skills table 
    together by id */
    addUsers: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO users WHERE id = ?';
    	})
    }

    addSkills: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO skills WHERE id = ?';
    		connection.query(queryString, function(err, result){
    			resolve(result);
    		})
    	})
    }
    
   	addCompanyScores: function(score){
   		return new Promise(function(resolve, reject){
   			var queryString = 'INSERT INTO recruiter';
   			connection.query(queryString, function(err, result){
   				resolve(result);
   			})
   		})
   	}

};

module.exports = orm;
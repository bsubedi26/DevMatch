
//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {
    selectFramework: function(tableInput, colToSearch, valOfCol) {
    	return new Promise(function(resolve, reject) {
	        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

	        connection.query(queryString, [valOfCol], function(err, result) {
	            resolve(result);
	        });
    	});
    }
};

module.exports = orm;
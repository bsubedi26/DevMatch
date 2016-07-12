
//===============================================================================
//controller.js is the routes

//I believe this is where routes go, export them to server.js
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var callOrmFunctions = require('../models/model.js');

module.exports = function(app){

	app.get('/', function(req, res) {
		orm.selectFramework('profiles').then(function(data){

			res.render('index', {
            skills: data
        	});

		})
   	});
};











//===============================================================================
//controller.js is the routes

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var passport = require('passport');
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var callOrmFunctions = require('../models/model.js');

module.exports = function(app){

	// process the login form
	app.post('/register', function(req,res) {
		console.log(req.body);
	})
	
	app.get('/', function(req, res) {
		
		// orm.selectFramework('users').then(function(data){
		// 	console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
<<<<<<< HEAD
			res.render('admin', {
				users: data
        	});
		})
=======
		// 	res.render('admin', {
		// 		users: data
  //       	});
		// })

		res.render('index');
>>>>>>> 815d8b3fd88ccfca95f4c33ea3a8003ed25d4bb8
   	});

	app.put('/addUser', function(req,res){
		orm.addUsers('').then(function(data){
			console.log(data);
			res.redirect('/');
		})
	})

	app.put('/addSkill', function(req, res){
		orm.addSkills('').then(function(data){
			console.log(data);
			res.redirect('/');
		})
	})
	//This function will add all the company info
	app.put('addCompany', function(req, res){
		orm.addCompanyInfo('').then(function(data){
			console.log(data);
			/* we could render a modal or something here to say "Company Culture logged", or
			something to that affect */
			res.render();
		})
	})
};
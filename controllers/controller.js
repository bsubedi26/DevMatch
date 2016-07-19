
//===============================================================================
//controller.js is the routes

//I believe this is where routes go, export them to server.js
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/User.js');
var orm = require('../config/orm.js');
var bcrypt = require('bcrypt-nodejs');

//Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, username, password, done) {

  	//Searching the ORM for the user in the database
  	orm.findUser(username, function(err, user){
  		user = user[0];
  		if (err) { 
  			return done(err) 
  		}
      	if (!user) { 
      		return done(null, false) 
      	}
      	//comparing user passwords - return if not a match
      	if (bcrypt.compareSync(password, user.password) === false) { 
      		return done(null, false) 
     	 }
      	return done(null, user);
  	});
  }
));

//These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var orm = require('../config/orm.js');

module.exports = function(app){
	
	app.get('/login', function(req, res){
		res.render('login', {
			welcomeText: "Sign In",
			actionBtn: 'signin',
			message: req.flash('error')[0],
			otherAction: "Signup"
		});
	});

	app.get('/signin', function(req, res){
		res.redirect('/login')
	});

	app.get('/signup', function(req, res){
		res.render('login', {
			welcomeText: "Sign Up",
			actionBtn: 'signup',
			otherAction: "Signin"
		});
	});

	app.get('/authenticated', function(req,res){
		if (req.isAuthenticated()) {
			res.render('authenticated', {
				username: req.user.username
			})
		} else {
			res.redirect('/login')
		}
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/login');
	});

	//POST Routes

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/login', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/authenticated');
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.redirect('/signup')
				return false
			}
			res.redirect('/login');
		});
	});
	
	app.get('/', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('index');
		//})
   	});

   	app.get('/apps', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('applicant');
		//})
   	});

   	app.get('/admin', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('admin');
		//})
   	});
/*
	app.put('/admin', function(req,res){
		orm.addUsers('users').then(function(data){
			console.log(data);
			//res.redirect('/');
			res.render('applicant', {
				user: data
			})
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
			something to that affect ================================
			res.render();
		})
	})
	*/
};


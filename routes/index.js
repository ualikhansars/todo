var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user_model');
var displayTodoController = require('../controllers/displayTodoController');
var displayTodo = displayTodoController.displayTodo;


// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

var notAuthenticated = function (req, res, next) {
  if (!req.isAuthenticated())
    return next();
  res.redirect('/');
}

router.get('/', isAuthenticated, function(req, res, next) {
    res.render('index', {user: req.user});
});

router.get('/user', function(req, res, next) {
    var id = req.user.id;
    User.findById(id, function(err, doc) {
      if(err) throw err;
      res.json(doc);
    });
});

/* Handle Login POST */
router.post('/login', notAuthenticated, passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash : true 
}));

router.get('/login', notAuthenticated, function(req, res, next) {
    res.render('login', {});
});

/* GET Registration Page */
router.get('/signup', function(req, res){
    res.render('register',{message: req.flash('message')});
});

/* Handle Registration POST */
router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash : true 
}));

/* Handle Logout */
router.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = router;

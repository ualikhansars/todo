var express = require('express');
var router = express.Router();

var displayTodoController = require('../controllers/displayTodoController');
var displayTodo = displayTodoController.displayTodo;

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', {});
});



module.exports = router;

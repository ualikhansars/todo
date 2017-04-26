var express = require('express');
var router = express.Router();
var saveTodoController = require('../controllers/saveTodoController');
var Todo = require('../models/todo_model');

var saveTodo = saveTodoController.saveTodo;

/* GET users listing. */
router.post('/', function(req, res, next) {
    saveTodo(req, res, next);
});

module.exports = router;
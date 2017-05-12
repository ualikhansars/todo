var express = require('express');
var router = express.Router();
var saveTodoController = require('../controllers/saveTodoController');
var Todo = require('../models/todo_model');

var displayTodoController = require('../controllers/displayTodoController');
var displayTodo = displayTodoController.displayTodo;


var saveTodo = saveTodoController.saveTodo;

/* GET users listing. */
router.post('/', function(req, res, next) {
    saveTodo(req, res, next);
});

router.get('/', displayTodo);


// find todo by id and change display property to true
router.put('/addToList/:id', function(req, res, next) {
    var Bodyid = req.body.id;
    var id = req.params.id;
    Todo.findByIdAndUpdate(id, { $set: { display: true }}, {new: true}, function(err, doc) {
        if(err) {
            throw err;
        }
    doc.save();
    });
});


module.exports = router;
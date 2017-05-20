var express = require('express');
var router = express.Router();

var saveTodoController = require('../controllers/saveTodoController');
var Todo = require('../models/todo_model');


/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('index', {});
});

router.get('/getTodo', function(req, res, next) {
    Todo.find(function(err, doc) {
        if(err) throw err;
        res.status(200).json(doc);
    });
});

// POST Routers 
router.post('/addTodo', function(req, res, next) {
   var todoItem = {
        title: req.body.title,
        category: req.body.category,
        duration: req.body.duration,
        startTimeHours: req.body.start_time_hours,
        startTimeMinutes: req.body.start_time_minutes,
        finishTimeHours: req.body.finish_time_hours,
        finishTimeMinutes: req.body.finish_time_minutes,
        username: req.params.username
    }
    // // validation
    req.checkBody('title', 'title is required').notEmpty();
    req.checkBody('duration', 'duration is required').notEmpty().isInt();
    req.checkBody('startTimeHours', 'duration is required').notEmpty().isInt();
    req.checkBody('startTimeMinutes', 'duration is required').notEmpty().isInt();
    req.checkBody('finishTimeHours', 'duration is required').notEmpty().isInt();
    req.checkBody('finishTimeMinutes', 'duration is required').notEmpty().isInt();

    var todo = new Todo(todoItem);
    todo.save();
    res.redirect('/:username');
});




// find todo by id and change display property to true
router.post('/addToList/:id',  function(req, res, next) {
    var id = req.params.id;
     Todo.findByIdAndUpdate(id, { $set: { display: true }}, {new: false}, function(err, doc) {
        if(err) {
            throw err;
        }
    doc.save();
    });
    res.redirect('/:username');
});

router.post('/removeFromList/:id', function(req, res, next) {
    var id = req.params.id;
     Todo.findByIdAndUpdate(id, { $set: { display: false }}, {new: true}, function(err, doc) {
        if(err) {
            throw err;
        }
    doc.save();
    });
    res.redirect('/:username');
});

module.exports = router;

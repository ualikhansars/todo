var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo_model');



module.exports.saveTodo = function(req, res, next) {
    var todoItem = {
        title: req.body.title,
        category: req.body.category,
        duration: req.body.duration,
        startTimeHours: req.body.start_time_hours,
        startTimeMinutes: req.body.start_time_minutes,
        finishTimeHours: req.body.finish_time_hours,
        finishTimeMinutes: req.body.finish_time_minutes,
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
    
    res.render('index', {});
}
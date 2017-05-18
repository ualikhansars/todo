var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/todo_model');

module.exports.displayTodo = function(req, res, next) {
    Todo.find(function(err, doc) {
        if(err) throw err;
        //res.render('index', {todos: doc});
        //res.send(doc);
        res.json(doc);
    });
}    
const mongoose = require('mongoose');
const db = mongoose.connection;

var todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String},
    duration: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        min: 0,
        max: 720,  
        require: true
    },
    startTimeHours: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        min: 0,
        max: 23,  
        require: true
    },
    startTimeMinutes: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        min: 0,
        max: 59,  
        require: true
    },
    finishTimeHours: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        min: 0,
        max: 23,  
        require: true
    },
    finishTimeMinutes: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        min: 0,
        max: 59,  
        require: true
    },
    display: {
        type: Boolean, 
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);
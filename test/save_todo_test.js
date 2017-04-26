const Todo = require('../models/todo_model');
const assert = require('assert');

describe('saving records', function() {
    it('save todo to database', function(done) {
        var dataStructure = new Todo({
            title: 'Data Structure and Algorithm',
            category: 'Study',
            duration: 2,
            startTimeHours: 12,
            startTimeMinutes: 30,
            finishTimeHours: 14,
            finishTimeMinutes: 0,
        });
        dataStructure.save().then(function() {
            assert(dataStructure.isNew === false);
            done();
        });
    });
});


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/saveTodo', function(req, res, next) {
    var title = req.body.title;
    var category = req.body.category;
    var duration = req.body.duration;
    var startTimeHours = req.body.start_time_hours;
    var startTimeMinutes = req.body.start_time_minutes;
    var finishTimeHours = req.body.finish_time_hours;
    var finishTimeMinutes = req.body.finish_time_minutes;

    // validation
    req.checkBody('title', 'title is required').notEmpty();
    req.checkBody('duration', 'duration is required').notEmpty().isInt();
    req.checkBody('startTimeHours', 'duration is required').notEmpty().isInt();
    req.checkBody('startTimeMinutes', 'duration is required').notEmpty().isInt();
    req.checkBody('finishTimeHours', 'duration is required').notEmpty().isInt();
    req.checkBody('finishTimeMinutes', 'duration is required').notEmpty().isInt();
    

});

module.exports = router;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_todo');
mongoose.connection.once('open', function() {
    console.log('Connection established');
}).on('error', function(error) {
    console.log('Connection error', error);
});
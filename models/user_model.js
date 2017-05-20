const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: true, require: true},
});

module.exports = mongoose.model('User', userSchema);
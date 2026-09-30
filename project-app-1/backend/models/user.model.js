const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type : int, required : true, unique : true},
    username: {type : string, required : true},
    password: {type : string, required : true},
    role: {type : string, enum:['user'], default: 'user'}
});

module.exports = mongoose.model('User', userSchema);
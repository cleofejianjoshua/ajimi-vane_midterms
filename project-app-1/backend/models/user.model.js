const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type : int, required : true},
    username: {type : string, required : true},
    password: {type : string, required : true},
    role: {type : string}
})
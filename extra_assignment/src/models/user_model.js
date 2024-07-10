const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "email": String,
    "age": Number,

})
module.exports = mongoose.model("Users", UserSchema, "Users");
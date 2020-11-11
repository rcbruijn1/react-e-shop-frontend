const mongoose = require('mongoose');

const User = mongoose.model("User",{
    username: String,
    password: String,
    fullname: String,
});

module.exports = User;
var mongoose = require('mongoose');

var user = new mongoose.Schema({
 	userName: {type: String, required: true},
	password: {type: String, required: true}
});

user.index({ "username": 1 });

//module.exports = mongoose.model('User' , user)

module.exports = user;
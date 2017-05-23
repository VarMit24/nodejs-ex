var mongoose = require('mongoose');

var student = new mongoose.Schema({
 	name: String,
	section: String,
	createdTime: { type: Date, default: Date.now},
	updatedTime: { type: Date, default: Date.now}
});

module.exports = mongoose.model('student' , student)
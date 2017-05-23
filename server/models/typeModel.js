var mongoose = require('mongoose');

var type = new mongoose.Schema({
 	section: [String],
	criteria: [String]
});

module.exports = mongoose.model('type' , type)
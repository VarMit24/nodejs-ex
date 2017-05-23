var mongoose = require('mongoose');

var feedback = new mongoose.Schema({
 	userId: String,
	incidentDate: Date,
	criteria: String,
	feedback: String,
	createdTime: { type: Date, default: Date.now}
});

module.exports = mongoose.model('feedback' , feedback)
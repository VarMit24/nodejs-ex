var mongoose = require('mongoose');

var incident = new mongoose.Schema({
 	userId: String,
	section: String,
	criteria: String,
	data: [{gva_id: String,details: String}],
	createdTime: { type: Date, default: Date.now},
	updatedTime: { type: Date, default: Date.now}
});

module.exports = mongoose.model('incident' , incident)
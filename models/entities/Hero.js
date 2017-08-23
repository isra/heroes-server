var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hero = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('hero', Hero);
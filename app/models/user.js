var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	name: String,
	password: String,
	language: String,
	timezone: {type: Date, default: Date.now()},
	currency: String,
	isPublic: Boolean,
	messages: String,
	enableCategory: Boolean,
});

module.exports = mongoose.model('User', UserSchema);
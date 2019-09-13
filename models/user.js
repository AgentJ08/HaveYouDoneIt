const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	pass: {
		type: String,
		required: true
	}
});

module.exports = User = mongoose.model('user', UserSchema);
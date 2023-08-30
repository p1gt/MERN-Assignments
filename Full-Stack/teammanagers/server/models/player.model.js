const mongoose = require('mongoose');

module.exports = mongoose.model('Player', new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		minlength: [2, 'Name must be at least 2 characters long'],
	},
	position: {
		type: String,
		default: '',
	},
	statuses: {
		type: Object,
		default: {
			1: 'Undecided',
			2: 'Undecided',
			3: 'Undecided',
		},
	},
}, { timestamps: true }));
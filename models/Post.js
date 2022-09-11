const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
		type: {
			type: String,
			require: true,
		},
		location: {
			type: String,
			require: true,
		},
		deadline: {
			type: Date,
			require: true,
		},
		compensation: {
			type: Number,
			require: true,
		},
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);

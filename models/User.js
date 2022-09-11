const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
		},
		artistName: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
		},
		phoneNumber: {
			type: String,
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		location: {
			type: String,
			require: true,
		},
		userType: {
			type: String,
			require: true,
		},
		socials: {
			type: Object,
			soundcloud: {
				type: String,
			},
			bandcamp: {
				type: String,
			},
			spotify: {
				type: String,
			},
			youtube: {
				type: String,
			},
			instagram: {
				type: String,
			},
			facebook: {
				type: String,
			},
			twitter: {
				type: String,
			},
		},

		ownPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
		savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);

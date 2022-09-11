const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
		},
		password: String,
		artistName: {
			type: String,
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

// Password hash middleware.

UserSchema.pre('save', function save(next) {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
	candidatePassword,
	cb
) {
	bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
		cb(err, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);

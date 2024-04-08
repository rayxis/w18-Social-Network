// Import the necessary modules from mongoose
const mongoose        = require('mongoose');
const {Schema, Types} = require('mongoose');

// Define the schema for a User
const userSchema = new Schema(
	{
		// A required field 'username', it should be unique and shall be trimmed automatically
		username:     {
			type:     String,
			required: [true, 'Username is required'],
			trim:     true,
			unique:   true
		},
		// A required field 'email', it should be unique and shall be validated and trimmed automatically
		email:        {
			type:     String,
			match:    [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
			required: [true, 'Email is required'],
			trim:     true,
			unique:   true
		},
		// 'thoughts' is an array of ObjectId's originating from the 'Thoughts' model
		thoughts:     [{type: Schema.Types.ObjectId, ref: 'Thought'}],
		// 'friends' is an array of ObjectId's originating from the 'Users' model
		friends:      [{type: Schema.Types.ObjectId, ref: 'User'}]
	},
	{
		// Include the 'friendCount' virtual field defined below
		toJSON: {virtuals: true}
	});

// Define a virtual field 'friendCount' that returns the count of friends
userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
// Import the necessary modules from mongoose
const mongoose        = require('mongoose');
const {Schema, Types} = require('mongoose');

// Define the schema for a 'Theme'
const themeSchema = new Schema(
	{
		// A required 'thoughtText' field with a maximum length of 280 characters and a minimum length of 1
		thoughtText: {
			type:      String,
			required:  [true, 'Thought content is required'],
			maxlength: 280,
			minlength: 1
		},
		// 'createdAt' field with a default value of the current date and time and getter function
		createdAt: {
			type:    Date,
			default: Date.now,
			get:     timestamp => dateFormat(timestamp)
		},
		// A required 'username' field
		username: {
			type:     String,
			required: true
		},
		// 'reactions' is an array of ObjectId's originating from the 'Reaction' model
		reactions: {
			type: [{type: Schema.Types.ObjectId, ref: 'Reaction'}]
		}
	},
	{

		// Include the 'reactionCount' virtual field, and getter functions
		toJSON: {virtuals: true, getters: true}
	});

// Define a virtual field 'reactionCount' that returns the count of reactions
themeSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

// Function to format a timestamp into 'MM/DD/YYYY' format
function dateFormat(timestamp) {
	const date = new Date(timestamp);
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// Export the Theme model
module.exports = mongoose.model('Theme', themeSchema);
// Import the necessary modules from mongoose
const mongoose        = require('mongoose');
const {Schema, Types} = require('mongoose');

// Define the schema for a 'Reaction'
const reactionSchema = new Schema(
	{
		// reactionId field with type ObjectId and will create a new ObjectId by default
		reactionId: {
			type:    Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		// A required 'reactionBody' field with a maximum length of 280 characters and a minimum length of 1
		reactionBody: {
			type:      String,
			required:  [true, 'Reaction content is required'],
			maxlength: 280,
			minlength: 1
		},
		// A required 'username' field
		username: {
			type:     String,
			required: true
		},
		// 'createdAt' field with a default value of the current date and time and getter
		createdAt: {
			type:    Date,
			default: Date.now,
			get:     timestamp => dateFormat(timestamp)
		}
	},
	{
		// Include the getters
		toJSON: {getters: true}
	});

// Function to format a timestamp into 'MM/DD/YYYY' format
function dateFormat(timestamp) {
	const date = new Date(timestamp);
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// Export the Reaction schema
module.exports = reactionSchema;
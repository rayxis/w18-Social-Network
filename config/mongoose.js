// Import 'connect' and 'connection' from the 'mongoose' package.
const {connect, connection} = require('mongoose');

// Database connection
const db = {
	name: 'apiDB',
	host: '127.0.0.1',
	port: 27017
};

// Establish a connection to the MongoDB.
await connect(`mongodb://${db.host}:${db.port}/${db.name}`);

// Export the 'connection' object.
module.exports = {
	// Export the connection object
	connection: connection,

	// A function to let the user know when Mongoose has closed the connection to MongoDB.
	stop: async () => {
		await connection.close(() => {
			console.log('Mongoose connection closed');
		});
	}
};
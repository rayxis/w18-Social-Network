// External modules
const express = require('express');
const routes  = require('./routes');

// Set up the application port
const PORT = process.env.PORT || 3000;

// Database management
const db = require('./config/mongoose');

// Instantiate and configure Express
const app = express();
// Use sessions, parse JSON, serve static files and include routes.
app.use(express.urlencoded({extended: true}))
   .use(express.json())
   .use(routes);

// Start the server
const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

// Handle exiting gracefully for various exit signals.
// On uncaught exceptions, exit with a failure code.
process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
process.on('uncaughtException', (err) => {
	console.error('Uncaught exception', err);
	handleExit();
});

// Function to exit smoothly
function handleExit() {
	server.close(() => {
		// Disconnect from MongoDB, inform the user we're done, and exit.
		db.stop();
		console.log('Server closed');
		process.exit();
	});
}
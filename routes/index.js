// Create a new router
const router = require('express').Router();

// Use the endpoints exported by the 'api' module on the '/api' route path 
router.use('/api', require('./api'));

// Send a 404 as a Star Wars quote as the HTTP response text
router.use((req, res) => res.status(404).send('These aren\'t the droids you\'re looking for. Move along.'));

// Export the router module
module.exports = router;
// Create a new router
const router = require('express').Router();

// Loop through array of route names. For each name, mount the router found in a file of the same name
// For each given string in the array, there is a corresponding Routes .js file in the same directory
['thoughts','users'].forEach(route => router.use(`/${route}`, require(`./${route}Routes`)));

// Export the configured router
module.exports = router;
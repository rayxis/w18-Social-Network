// Create a new router
const router = require('express').Router();

// Import the required controller methods from the 'thoughts' controller
const {create, get, getAll, reactionAdd, reactionRemove, remove, update} = require('../../controllers/thoughts');

// Register paths on the router for the base URL
router.route('/')
      .get(getAll)      // The GET method on the base URL will retrieve all thoughts
      .post(create); 	// The POST method on the base URL will create a new thought

// Register paths on the router for URLs with a 'thoughtId' parameter
router.route('/:thoughtId')
      .delete(remove)   // The DELETE method on the /:thoughtId URL will delete the thought with this id
      .get(get)         // The GET method on the /:thoughtId URL will retrieve a specific thought by their id
      .put(update);     // The PUT method on the /:thoughtId URL will update the thought with this id

// Register paths on the router for URLs with 'thoughtId' and 'reactionId' parameters
router.route('/:thoughtId/reactions')
      .delete(reactionRemove) // DELETE method removes a reaction from the thought
      .post(reactionAdd);     // POST method adds a new reaction to the thought

// Export the router module
module.exports = router;
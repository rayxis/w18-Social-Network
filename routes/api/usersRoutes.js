// Create a new router
const router = require('express').Router();

// Import the required controller methods from the 'users' controller
const {create, friendAdd, friendRemove, get, getAll, remove, update} = require('../../controllers/users');

// Register paths on the router for the base URL
router.route('/')
      .get(getAll)      // The GET method on the base URL will retrieve all users
      .post(create); 	// The POST method on the base URL will create a new user

// Register paths on the router for URLs with a 'userId' parameter
router.route('/:userId')
      .delete(remove)   // The DELETE method on the /:id URL will delete the user with this id
      .get(get)         // The GET method on the /:id URL will retrieve a specific user by their id
      .put(update);     // The PUT method on the /:id URL will update the user with this id

// Register paths on the router for URLs with 'userId' and 'friendId' parameters
router.route('/:userId/friends/:friendId')
      .delete(friendRemove) // DELETE method removes a friend from the user
      .post(friendAdd);     // POST method adds a new friend to the user

// Export the router module
module.exports = router;
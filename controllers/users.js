// Import the necessary models
const {User} = require('../models');

// Messages to send the user
const messages = {
	notFound: 'This user was not found.'
};

module.exports = {
	/**
	 * Creates a new user.
	 *
	 * @async
	 * @param {object} req - The request object, containing the data for the new user.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async create(req, res) {
		try {
			const user = await User.create(req.body);
			return res.json(user);
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Add a friend to a user's friend list.
	 *
	 * @async
	 * @param {object} req - The request object, containing the user's ID and friend's ID.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async friendAdd(req, res) {
		try {
			const user = await User.findByIdAndUpdate(
				req.user._id,
				{$addToSet: { friends: req.body.friendId } },
				{ runValidators: true, new: true }
			);

			return user ? res.status(200).json(user)
			            : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Remove a friend from a user's friend list.
	 *
	 * @async
	 * @param {object} req - The request object, containing the user's ID and friend's ID to remove.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async friendRemove(req, res) {
		try {
			const user = await User.findByIdAndUpdate(
				req.user._id,
				{ $pull: { friends: req.body.friendId } },
				{ runValidators: true, new: true }
			);

			return user ? res.status(200).json(user)
			            : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Get a user by ID.
	 *
	 * @async
	 * @param {object} req - The request object, containing the user's ID.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async get(req, res) {
		try {
			const user = await User.findById(req.params.userId);
			return user ? res.status(200).json({user: user})
			            : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Get all users.
	 *
	 * @async
	 * @param {object} req - The request object.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async getAll(req, res) {
		try {
			const users = await User.find();

			return res.status(200).json({users: users});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Remove a user by ID.
	 *
	 * @async
	 * @param {object} req - The request object, containing the user's ID.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async remove(req, res) {
		try {
			const result = await User.findByIdAndDelete(req.params.userId);

			return result ? res.status(200).json({message: 'User deleted successfully'})
			              : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},

	/**
	 * Update a user.
	 *
	 * @async
	 * @param {object} req - The request object, containing the user's ID and new data.
	 * @param {object} res - The response object.
	 * @returns {Promise<*>} A promise that resolves to a response object.
	 */
	async update(req, res) {
		try {
			const user = await User.findByIdAndUpdate(
				req.user._id,
				{ $set: req.body },
				{ runValidators: true, new: true }
			);

			return user ? res.status(200).json(user)
			            : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	}};
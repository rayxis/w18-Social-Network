const {Reaction, Thought, User} = require('../models');

const messages = {
	notFound: 'This thought was not found.'
};

module.exports = {
	/**
	 * Creates a new thought.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the data for the new thought.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async create(req, res) {
		try {
			const thought = await Thought.create(req.body);

			return res.json(thought);
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Add a reaction to a thought's reaction list.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the thought's ID and reaction's ID.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async reactionAdd(req, res) {
		try {
			const thought = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				{ $addToSet: { reactions: req.body.reactionId } },
				{ runValidators: true, new: true }
			);

			return thought ? res.status(200).json(thought)
			               : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Remove a reaction from a thought's reaction list.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the thought's ID and reaction's ID to remove.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async reactionRemove(req, res) {
		try {
			const thought = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				{ $pull: { reactions: req.body.reactionId } },
				{ runValidators: true, new: true }
			);

			return thought ? res.status(200).json(thought)
			               : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Get a thought by ID.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the thought's ID.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async get(req, res) {
		try {
			const thought = await Thought.findById(req.params.thoughtId);

			return thought ? res.status(200).json({thought: thought})
			               : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Get all thoughts.
	 *
	 * @async
	 * @param {Request} req - The request object.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async getAll(req, res) {
		try {
			const thoughts = await Thought.find();

			return res.status(200).json({thoughts: thoughts});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Remove a thought by ID.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the thought's ID.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async remove(req, res) {
		try {
			const result = await Thought.findByIdAndDelete(req.params.thoughtId);

			return result ? res.status(200).json({message: 'Thought deleted successfully'})
			              : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	/**
	 * Update a thought.
	 *
	 * @async
	 * @param {Request} req - The request object, containing the thought's ID and new data.
	 * @param {Response} res - The response object.
	 * @returns {Promise<any>} A promise that resolves to a response object.
	 */
	async update(req, res) {
		try {
			const thought = await Thought.findByIdAndUpdate(
				req.params.thoughtId,
				{ $set: req.body },
				{ runValidators: true, new: true }
			);

			return (thought) ? res.status(200).json(thought)
			                 : res.status(404).json({message: messages.notFound});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	}
};
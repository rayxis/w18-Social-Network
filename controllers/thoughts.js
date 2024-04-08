const {Reaction, Thought, User} = require('../models');

const messages = {
	notFound: 'This thought was not found.'
};

module.exports = {
	async create(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async get(req, res) {
		try {
			const thought = await Thought.findById(req.params.thoughtId);

			if (!thought) return res.status(404).json({message: messages.notFound});
			res.status(200).json({thought: thought});

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async getAll(req, res) {
		try {
			const thoughts = await Thought.find();

			res.status(200).json({thoughts: thoughts});
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async reactionAdd(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async reactionRemove(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async remove(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async update(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	}
};
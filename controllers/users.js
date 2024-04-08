const {User} = require('../models');
const res = require('express/lib/response');

const messages = {
	notFound: 'This user was not found.'
};

module.exports = {
	async create(req, res) {
		try {
		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async friendAdd(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async friendRemove(req, res) {
		try {

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async get(req, res) {
		try {
			const user = await User.findById(req.params.userId);

			if (!user) return res.status(404).json({message: messages.notFound});
			res.status(200).json({user: user});

		} catch (e) {
			console.error(e);
			return res.status(500).send(e);
		}
	},
	async getAll(req, res) {
		try {
			const users = await User.find();

			res.status(200).json({users: users});
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
const Player = require('../models/player.model');

module.exports = {
	createPlayer: (req, res) => {
		Player.create(req.body)
			.then(player => res.json(player))
			.catch(err => res.status(400).json(err));
	},
	retrieveAllPlayers: (req, res) => {
		Player.find()
			.then(players => res.json(players))
			.catch(err => res.status(400).json(err));
	},
	retrievePlayer: (req, res) => {
		Player.findById(req.params.id)
			.then(player => res.json(player))
			.catch(err => res.status(400).json(err));
	},
	updatePlayer: (req, res) => {
		Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
			.then(player => res.json(player))
			.catch(err => res.status(400).json(err));
	},
	deletePlayer: (req, res) => {
		Player.findByIdAndDelete(req.params.id)
			.then(player => res.json(player))
			.catch(err => res.status(400).json(err));
	},
};
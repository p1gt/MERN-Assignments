const Authors = require('../models/authors.model');

module.exports = {
	create: (req, res) => {
		Authors.create(req.body)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	getAll: (req, res) => {
		Authors.find()
			.then(data => res.json(data))
			.catch(err => res.json(err));
	},
	getOne: (req, res) => {
		Authors.findById(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	update: (req, res) => {
		Authors.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
	delete: (req, res) => {
		Authors.findByIdAndDelete(req.params.id)
			.then(data => res.json(data))
			.catch(err => res.status(400).json(err));
	},
};
const Jokes = require("../models/jokes.model");

module.exports = {
	create: (req, res) => {
		Jokes.create(req.body)
			.then(joke => res.json(joke))
			.catch(err => console.log(err));
	},
	find: (req, res) => {
		Jokes.find()
			.then(jokes => res.json(jokes))
			.catch(err => console.log(err));
	},
	findById: (req, res) => {
		Jokes.findById(req.params.id)
			.then(joke => res.json(joke))
			.catch(err => console.log(err));
	},
	update: (req, res) => {
		Jokes.updateOne({_id: req.params.id}, req.body, {runValidators: true})
			.then(result => res.json(result))
			.catch(err => res.json(err));
	},
	delete: (req, res) => {
		Jokes.deleteOne({_id: req.params.id})
			.then(result => res.json(result))
			.catch(err => res.json(err));
	},
};

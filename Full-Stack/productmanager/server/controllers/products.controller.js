const Product = require("../models/products.model");

module.exports = {
	create: (req, res) => {
		Product.create(req.body)
			.then(product => res.json(product))
			.catch(err => res.status(400).json(err));
	},
	retrieveAll: (req, res) => {
		Product.find({})
			.then(products => res.json(products))
			.catch(err => res.status(400).json(err));
	},
	retrieveOne: (req, res) => {
		Product.findOne({ _id: req.params.id })
			.then(product => res.json(product))
			.catch(err => res.status(400).json(err));
	},
};

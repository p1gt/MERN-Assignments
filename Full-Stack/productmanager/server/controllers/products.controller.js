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
	retrieve: (req, res) => {
		Product.findOne({ _id: req.params.id })
			.then(product => res.json(product))
			.catch(err => res.status(400).json(err));
	},
	update: (req, res) => {
		Product.updateOne({ _id: req.params.id }, req.body, { runValidators: true, new: true })
			.then(product => res.json(product))
			.catch(err => res.status(400).json(err));
	},
	delete: (req, res) => {
		Product.deleteOne({ _id: req.params.id })
			.then(product => res.json(product))
			.catch(err => res.status(400).json(err));
	},
};

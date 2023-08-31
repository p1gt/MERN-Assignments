const store = require('../models/store.model');

module.exports = {
    createstore: (req, res) => {
        store.create(req.body)
            .then(store => res.json(store))
            .catch(err => res.status(400).json(err));
    },
    retrieveAllstores: (req, res) => {
        store.find()
            .then(stores => res.json(stores))
            .catch(err => res.status(400).json(err));
    },
    retrievestore: (req, res) => {
        store.findById(req.params.id)
            .then(store => res.json(store))
            .catch(err => res.status(400).json(err));
    },
    updatestore: (req, res) => {
        store.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(store => res.json(store))
            .catch(err => res.status(400).json(err));
    },
    deletestore: (req, res) => {
        store.findByIdAndDelete(req.params.id)
            .then(store => res.json(store))
            .catch(err => res.status(400).json(err));
    },
};
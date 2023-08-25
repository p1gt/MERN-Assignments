const Authors = require('../controllers/authors.controller');

module.exports = app => {
	app.post('/api/authors', Authors.create);
	app.get('/api/authors', Authors.getAll);
	app.get('/api/authors/:id', Authors.getOne);
	app.patch('/api/authors/:id', Authors.update);
	app.delete('/api/authors/:id', Authors.delete);
}
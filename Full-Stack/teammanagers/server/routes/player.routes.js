const PlayerController = require('../controllers/player.controller');

module.exports = app => {
	app.post('/api/players', PlayerController.createPlayer);
	app.get('/api/players', PlayerController.retrieveAllPlayers);
	app.get('/api/players/:id', PlayerController.retrievePlayer);
	app.patch('/api/players/:id', PlayerController.updatePlayer);
	app.delete('/api/players/:id', PlayerController.deletePlayer);
};
const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
	app.get("/api/jokes", JokeController.find);
	app.post("/api/jokes", JokeController.create);
	app.get("/api/jokes/:id", JokeController.findById);
	app.patch("/api/jokes/:id", JokeController.update);
	app.delete("/api/jokes/:id", JokeController.delete);
};

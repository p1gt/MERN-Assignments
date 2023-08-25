const ProductsController = require('../controllers/products.controller');

module.exports = (app) => {
	app.post("/api/products", ProductsController.create);
	app.get("/api/products", ProductsController.retrieveAll);
	app.get("/api/products/:id", ProductsController.retrieve);
	app.patch("/api/products/:id", ProductsController.update);
	app.delete("/api/products/:id", ProductsController.delete);
};

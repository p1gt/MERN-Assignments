const ProductsController = require('../controllers/products.controller');

module.exports = (app) => {
	app.post("/api/products", ProductsController.create);
	app.get("/api/products", ProductsController.retrieveAll);
	app.get("/api/products/:id", ProductsController.retrieveOne);
};

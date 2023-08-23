const mongoose = require("mongoose");
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@codingdojo.v7stzvz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));

const mongoose = require("mongoose");
const uri = "mongodb+srv://root:root@codingdojo.v7stzvz.mongodb.net/productmanager?retryWrites=true&w=majority";

mongoose.connect(uri)
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
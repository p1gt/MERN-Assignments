const app = require("express")();

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
	console.log("Server listening on port 8000");
});
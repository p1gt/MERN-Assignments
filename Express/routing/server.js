const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
	{ firstName: "Reimu",  lastName: "Hakurei" },
	{ firstName: "Marisa", lastName: "Kirisame" },
	{ firstName: "Sanae",  lastName: "Kochiya" },
	{ firstName: "Sakuya", lastName: "Izayoi" },
	{ firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) => {
	res.json(users);
});

app.post("/api/users", (req, res) => {
	users.push(req.body);
	res.json({ status: "ok" });
});

app.get("/api/users/:id", (req, res) => {
	res.json(users[req.params.id]);
});

app.patch("/api/users/:id", (req, res) => {
	const id = req.params.id;
	users[id] = req.body;
	res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
	const id = req.params.id;
	users.splice(id, 1);
	res.json({ status: "ok" });
});

app.listen(8000, () =>{
	console.log("Listening on port 8000");
});

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { faker } = require("@faker-js/faker");

const createUser = () => {
	return {
		_id: faker.database.mongodbObjectId(),
		firstName: faker.person.firstName(),
		lastName: faker.person.firstName(),
		phoneNumber: faker.phone.number(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

const createCompany = () => {
	return {
		_id: faker.database.mongodbObjectId(),
		name: faker.company.name(),
		address: {
			street: faker.location.street(),
			city: faker.location.city(),
			state: faker.location.state(),
			zipCode: faker.location.zipCode(),
			country: faker.location.country(),
		},
	};
};

app.get("/api/users/new", (req, res) => {
	res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
	res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
	res.json({
		user: createUser(),
		company: createCompany(),
	});
});

app.listen(8000, () => {
	console.log("Server started!");
});

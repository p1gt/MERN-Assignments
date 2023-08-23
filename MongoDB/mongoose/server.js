const express = require("express");
const app = express();
require("dotenv").config();
require("./server/config/mongoose.config");
const port = process.env.PORT;
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

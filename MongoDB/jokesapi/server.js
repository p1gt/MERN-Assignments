const express = require("express");
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
require("dotenv").config();
require("./server/config/mongoose.config");
const port = process.env.PORT;

require("./server/routes/jokes.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const app = express();

const routes = require("./app/routes/routes")
const Controller = require("./app/lib/BaseController")

const db = require("./app/models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.use("/*", (req, res, next) => Controller.notFound({ res }));

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}....`);
});

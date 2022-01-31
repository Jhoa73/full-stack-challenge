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

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header('Access-Control-Expose-Headers', 'Content-Count');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return next();
});

app.use("/api", routes);
app.use("/*", (req, res, next) => Controller.notFound({ res }));

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}....`);
});

const dbConfig = require("../config/db.config.js");
const { user, password, db: dbName } = dbConfig
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbName, user, password, { ...dbConfig });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Card = require("./card.model.js")(sequelize, Sequelize);

module.exports = db;

const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const routes = Router();

routes.use(`/${UserController.name}`, UserController.routes());

module.exports = routes;

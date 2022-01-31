const { Router } = require("express");

module.exports = class Controller {
  name;
  router;

  constructor() {
    this.router = Router();
  }

  routes() {
    return this.router;
  }

  static ok({ res, data = {}, message = "Ok" }) {
    return res.status(200).json({
      status: 200,
      message,
      data,
    });
  }

  static created({ res, data = {}, message = "Created" }) {
    return res.status(201).json({
      status: 201,
      message,
      data,
    });
  }

  static deleted({ res, message = "Deleted" }) {
    return res.status(204).json({ message });
  }

  static badRequest({ res, data = {}, message = "Bad request" }) {
    return res.status(400).json({
      status: 400,
      message,
      data,
    });
  }

  static notFound({ res, data = {}, message = "Not found" }) {
    return res.status(404).json({
      status: 404,
      message,
      data,
    });
  }

  static serverError({ res, message = "Server error", data = {} }) {
    return res.status(500).send({
      status: 500,
      message,
    });
  }
}

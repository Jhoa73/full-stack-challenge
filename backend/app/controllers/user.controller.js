const Controller = require("../lib/BaseController");
const db = require("../models");
const User = db.User;
const Card = db.Card;

User.hasOne(Card, { foreignKey: "user_id" });

const Op = db.Sequelize.Op;

async function validateEmail({ email }) {
  const usedEmail = await User.count({ where: { email } });
  if (usedEmail) {
    throw "Email ya se encuentra registrado";
  }
}

class UserController extends Controller {
  name = "user";

  routes() {
    this.router.get("/", this.findAll);
    this.router.get("/:user_id", this.loadUser, this.findOne);
    this.router.post("/", this.create);
    this.router.put("/:user_id", this.loadUser, this.update);
    this.router.delete("/:user_id", this.loadUser, this.delete);

    return this.router;
  }

  async findOne(req, res, next) {
    try {
      const { user } = req;
      return Controller.ok({ res, data: user });
    } catch (error) {
      return Controller.badRequest({ res, data: error });
    }
  }

  async findAll(req, res, next) {
    try {
      const { search, status } = req.query;
      let where = {};

      if (status) {
        where.status = status;
      }
      if (search) {
        const searchQuery = [
          { full_name: { [Op.iLike]: `%${search}%` } },
        ]
        if (!isNaN(search)) {
          searchQuery.push({ id: Number(search) })
        }
        where[Op.or] = searchQuery;
      }
      const query = {
        where,
        include: [Card],
        order: [["createdAt", "DESC"]],
      }
      const users = await User.findAll(query);
      return Controller.ok({ res, data: users });
    } catch (error) {
      return Controller.badRequest({ res, data: error });
    }
  }

  async create(req, res, next) {
    try {
      const { body } = req;
      await validateEmail(body);
      const user = await User.create(body);
      let card;

      if (body.card) {
        card = await Card.create({ ...body.card, user_id: user.id });
      }

      return Controller.created({
        res,
        message: "Create user",
        data: { user, card },
      });
    } catch (error) {
      return Controller.badRequest({ res, message: error });
    }
  }

  async update(req, res, next) {
    try {
      const { user } = req;
      const { body } = req;
      await user.update(body);

      return Controller.ok({ res, data: user, message: "Update User" });
    } catch (error) {
      return Controller.badRequest({ res, data: error });
    }
  }

  async delete(req, res, next) {
    try {
      const { user } = req;
      await user.destroy();

      return Controller.deleted({ res });
    } catch (error) {
      return Controller.badRequest({ res, data: error });
    }
  }

  async loadUser(req, res, next) {
    try {
      const { user_id } = req.params;
      const where = { id: user_id };
      const user = await User.findOne({ where, include: [Card] });
      if (!user) {
        throw "Not found user";
      }
      req.user = user;
      next();
    } catch (error) {
      Controller.notFound({ res });
    }
  }
}

const controller = new UserController();
module.exports = controller;

module.exports = {
  host: "ec2-52-45-83-163.compute-1.amazonaws.com",
  user: "flnzgamwzevhss",
  password: "d2250b48018b6f62e6866160993d2407ddafd7589e44b6540260444b62ded835",
  db: "d1jjecmkojpodt",
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

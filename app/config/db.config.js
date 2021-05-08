const env = require("./env.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  port: env.port,
  operatorsAliases: false,
  logging: console.log,
  protocol: null,
  define: {
    timestamps: false,
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Mailmasterdb = require("../models/mailmaster.model.js")(
  sequelize,
  Sequelize
);

db.MailLogmasterdb = require("../models/maillogmaster.model.js")(
  sequelize,
  Sequelize
);

module.exports = db;

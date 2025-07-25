const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false, // remove logs in production
  }
);

module.exports = {
  PORT: process.env.PORT,
  sequelize
};
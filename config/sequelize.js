const Sequelize = require('sequelize');
const config = require('../config').db;

const { database, username, password } = config;

const sequelize = new Sequelize(
  database, username, password, config,
  { timezone: '+07:00' }
);

module.exports = sequelize;

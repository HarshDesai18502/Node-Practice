const Sequelize = require('sequelize');

const sequelize = new Sequelize('Test', 'root', 'Simform@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

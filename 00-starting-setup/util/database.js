const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'node', 'node', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
})

module.exports = sequelize
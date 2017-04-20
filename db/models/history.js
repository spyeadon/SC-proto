'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const History = db.define('history', {
  address: Sequelize.STRING
})

module.exports = History;

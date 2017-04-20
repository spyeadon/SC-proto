'use strict'

const db = require('APP/db')
const User = db.model('users')
const History = db.model('history')

const {mustBeLoggedIn, forbidden} = require('../auth.filters.js')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	.get('/history/:id', (req, res, next) => {
		History.findAll({where: {user_id: req.params.id}})
		.then(searchHistory => res.status(200).json(searchHistory))
		.catch(next)
	})
	.post('/history/:id', (req, res, next) => {
		History.create({
			address: req.body.searchAddress,
			user_id: req.params.id
		})
		.then(search => res.status(201).json(search))
		.catch(next)
	})

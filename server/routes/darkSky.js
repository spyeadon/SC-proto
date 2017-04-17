'use strict'
const DarkSky_API_KEY =  require('../../API_KEYS.json').DarkSky_API_KEY;
const DarkSky = require('dark-sky');
const DarkSkyInstance = new DarkSky(DarkSky_API_KEY);
const moment = require('moment');
moment().format('YYYY-MM-DD');


module.exports = require('express').Router()
	.post('/', (req, res, next) =>
    DarkSkyInstance
      .latitude(req.body.latitude)
      .longitude(req.body.longitude)
      .time(moment())
      .get()
      .then(data => res.json(data))
      .catch(next))

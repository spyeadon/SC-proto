'use strict'

const DarkSky_API_KEY =  require('../../API_KEYS.json').DarkSky_API_KEY;
const DarkSkyApi = require('../../app/DarkSky.jsx').default;
DarkSkyApi.apiKey = DarkSky_API_KEY;

const DarkSky = require('dark-sky');
const DarkSkyInstance = new DarkSky(DarkSky_API_KEY);

const moment = require('moment');


module.exports = require('express').Router()
	.post('/history', (req, res, next) => {
    let time = moment().subtract(req.body.day, 'days');
    let momentTracker = time.format('MMMM Do YYYY, h:mm:ss a');
    console.log("moment in weather history is: ", momentTracker);
      DarkSkyInstance
        .latitude(req.body.position.latitude)
        .longitude(req.body.position.longitude)
        .time(time)
        .get()
        .then(data => {
          data.moment = momentTracker
          res.json(data)
        })
        .catch(next)
  })
  .post('/forecast', (req, res, next) => {
    let time = moment().add(req.body.day, 'days');
    let momentTracker = time.format('MMMM Do YYYY, h:mm:ss a');
    console.log("moment in weather forecast is: ", momentTracker);
      DarkSkyInstance
        .latitude(req.body.position.latitude)
        .longitude(req.body.position.longitude)
        .time(time)
        .get()
        .then(data => {
          data.moment = momentTracker;
          res.json(data)
        })
        .catch(next)
  })
  .post('/current', (req, res, next) => {
    let time = moment();
    console.log("moment in current weather is: ", time.format('MMMM Do YYYY, h:mm:ss a'));
    DarkSkyInstance
        .latitude(req.body.latitude)
        .longitude(req.body.longitude)
        .time(time)
        .get()
        .then(data => {
          res.json(data)
        })
        .catch(next)
  })

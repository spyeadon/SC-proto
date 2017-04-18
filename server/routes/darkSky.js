'use strict'

const DarkSky_API_KEY =  require('../../API_KEYS.json').DarkSky_API_KEY;
const DarkSkyApi = require('../../app/DarkSky.jsx').default;
DarkSkyApi.apiKey = DarkSky_API_KEY;
const DarkSky = require('dark-sky');
const DarkSkyInstance = new DarkSky(DarkSky_API_KEY);

const moment = require('moment');
moment().format('YYYY-MM-DD');


module.exports = require('express').Router()
	.post('/', (req, res, next) => {
    console.log("DarkSkyApi is: ", DarkSkyApi.apiKey);
    let weatherData = [];
    let time;
    time = moment().subtract(7, 'days').calendar();
    DarkSkyInstance.latitude(req.body.latitude);
    DarkSkyInstance.longitude(req.body.longitude);
    DarkSkyApi.loadCurrent()
      .then(data => res.json(data))
      .catch(next);


      // DarkSkyInstance
      //   .latitude(req.body.latitude)
      //   .longitude(req.body.longitude)
      //   .time(time)
      //   .get()
      //   .then(data => {
      //     weatherData.push(data)
      //     // res.json(data)
      //   })
      //   .catch(next)
  })

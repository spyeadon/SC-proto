'use strict'
// import {DarkSky_API_KEY} from '../../API_KEYS.json';
// const DarkSky = require('dark-sky');
// const DarkSkyInstance = new DarkSky(DarkSky_API_KEY);
// const moment = require('moment');
// moment().format('YYYY-MM-DD');
import axios from 'axios';

export const NEW_SEARCH = 'NEW_SEARCH';

export const newSearch = weatherData => ({
    type: NEW_SEARCH,
    weatherData: weatherData
})

export const weatherAPIThunk = position =>
     dispatch =>
        axios.post('/api/weather', position)
        .then(res => dispatch(newSearch(res.data)))
        .catch(err => console.error(err))

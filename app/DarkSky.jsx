const DarkSkyApi = require('dark-sky-api');
const DarkSky_API_KEY = require('../API_KEYS.json').DarkSky_API_KEY;

DarkSkyApi.apiKey = DarkSky_API_KEY;

module.exports = DarkSkyApi;

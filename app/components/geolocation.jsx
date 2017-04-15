import React from 'react';
import {connect} from 'react-redux'

import DarkSkyAPI from 'dark-sky-api';
import {DarkSky_API_KEY, GoogleMaps_API_KEY} from '../../API_KEYS.json';

export const geolocation = (props) => {

  DarkSkyAPI.apiKey = DarkSky_API_KEY;
  DarkSkyAPI.loadCurrent()
   .then(result => console.log(result))

  return (
    <div id="geolocation-container">
    </div>
  )
}

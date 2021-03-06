import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';
import {connect} from 'react-redux';
import MapContainer from './MapContainer.jsx';
import {weatherHistory, weatherForecast, weatherCurrently, newSearch} from '../action-creators/geocode.jsx';
import {postToSearchHistory} from '../action-creators/history.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeWeatherHistData (day, position) {
      dispatch(weatherHistory(day, position));
    },
    storeForecastData (day, position) {
      dispatch(weatherForecast(day, position));
    },
    storeWeatherCurrData (position) {
      dispatch(weatherCurrently(position));
    },
    startFreshSearch (formattedAddress) {
      dispatch(newSearch(formattedAddress));
    },
    addSearchToDB (searchAddress, userID) {
      dispatch(postToSearchHistory(searchAddress, userID));
    }
  }
}

export const MapPreContainer = connect(
  mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: GoogleMaps_API_KEY
})(MapPreContainer);

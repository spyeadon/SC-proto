import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';
import {connect} from 'react-redux';
import MapContainer from './MapContainer.jsx';
import {newSearch, googleInstance} from '../action-creators/geocode.jsx';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeSearchResults (results) {
      dispatch(newSearch(results));
    }
  }
}

export const MapPreContainer = connect(
  mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: GoogleMaps_API_KEY
})(MapPreContainer);

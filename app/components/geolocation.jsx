import React from 'react';
import {connect} from 'react-redux'
import DarkSkyApi from '../DarkSky.jsx';

export const Geolocation = (props) => {

  function latLng () {
    if (props.geocodeData.geometry){
      let data = props.geocodeData.geometry.location;
      let position = {latitude: data.lat(), longitude: data.lng()}
      console.log("position is: ", position);
      DarkSkyApi.loadCurrent(position)
        .then(result => console.log(result));
    }
  }

  latLng();

  return (
    <div id="geolocation-container">
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    geocodeData: state.geocode.geocodeData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const GeoContainer = connect(
  mapStateToProps, mapDispatchToProps)(Geolocation)

export default GeoContainer;

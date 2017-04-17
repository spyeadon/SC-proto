import React from 'react';
import {connect} from 'react-redux'
import DarkSkyApi from '../DarkSky.jsx';
import Chart from './Charts.jsx';

class Geolocation extends React.Component {
  constructor(props){
    super();
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  getWeatherData () {
    if (this.props.geocodeData.geometry){
      let data = this.props.geocodeData.geometry.location;
      let position = {latitude: data.lat(), longitude: data.lng()}
      console.log("position is: ", position);
      //  DarkSkyApi.loadCurrent(position)
      //   .then(result => console.log("current forecast data: ", result));

      return DarkSkyApi.loadForecast(position)
        .then(result => {
          console.log("weekly forecast data", result);
          return result
        }).then(result => {
            let obj = {};
            obj.data = result.daily.data;
            obj.summary = result.daily.summary;
            return obj;
          })
    }
  }

  render (){
    return (
      <Chart
        getWeatherData={this.getWeatherData}
      />
    )
  }
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

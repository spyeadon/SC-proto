import React from 'react';
import {connect} from 'react-redux'
import Chart from './Chart.jsx';

class Geolocation extends React.Component {
  constructor(props){
    super();
    this.state = {
      updated: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const history = nextProps.weatherData.length;
    const future = nextProps.weatherData.length;
    const current = Object.keys(nextProps.currentData).length
    if (current > 0 && history === 6 && future === 6 && !this.state.updated) {
      this.setState({updated: true})
    }
  }

  render (){
    if (!this.state.updated) {
      return <div id="geolocation-container">Loading...</div>
    }
    return (
      <Chart
      weatherData={this.props.weatherData}
      currentData={this.props.currentData}
      forecastData={this.props.forecastData}
      formattedAddress={this.props.formattedAddress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.geocode.weatherData,
    forecastData: state.geocode.forecastData,
    currentData: state.geocode.currentData,
    formattedAddress: state.geocode.formattedAddress,
    auth: state.auth
  }
}

const GeoContainer = connect(
  mapStateToProps, null)(Geolocation)

export default GeoContainer;

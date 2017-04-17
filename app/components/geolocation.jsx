import React from 'react';
import {connect} from 'react-redux'
import Chart from './Charts.jsx';

class Geolocation extends React.Component {
  constructor(props){
    super();
    this.state = {
      updated: false
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log("geolocation will receive next props");
    console.log("weather data: ", nextProps.weatherData);
    const data = Object.keys(nextProps.weatherData).length;
    if (data && !this.state.updated) {
      this.setState({updated: true})
    }
  }

  componentDidMount () {
    console.log("geolocation did mount")
  }

  render (){
    if (!this.state.updated) {
      return <div id="geolocation-container">Loading...</div>
    }
    return (
      <Chart
      weatherData={this.props.weatherData}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.geocode.weatherData,
    auth: state.auth
  }
}

const GeoContainer = connect(
  mapStateToProps, null)(Geolocation)

export default GeoContainer;

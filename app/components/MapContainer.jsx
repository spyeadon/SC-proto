import React from 'react';
import Map, {Marker} from 'google-maps-react';
import Maps from './Map.jsx';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';

class MapContainer extends React.Component {
  constructor(props){
    super();
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveLatLng = this.receiveLatLng.bind(this);
    this.setMapElementReference = this.setMapElementReference.bind(this);
  }

  componentDidUpdate() {
    if (this.props.google){
      this.geocoder = new this.props.google.maps.Geocoder();

      // this.map = new this.props.google.maps.Map(this.mapElement, {
      //   zoom: 8,
      //   center: {
      //     lat: 41.797255,
      //     lng: -87.582571
      //   }
      // });
    }
  }

  setMapElementReference (mapElementReference) {
    this.mapElement = mapElementReference;
  }

  receiveLatLng(results) {
    const data = results[0].geometry.location;
    const position = {latitude: data.lat(), longitude: data.lng()}
    console.log("position is: ", position);

    this.props.startFreshSearch();

    this.props.storeWeatherCurrData(position);

    this.props.storeWeatherHistData(1, position);
    this.props.storeWeatherHistData(2, position);
    this.props.storeWeatherHistData(3, position);
    this.props.storeWeatherHistData(4, position);
    this.props.storeWeatherHistData(5, position);
    this.props.storeWeatherHistData(6, position);

    this.props.storeForecastData(1, position);
    this.props.storeForecastData(2, position);
    this.props.storeForecastData(3, position);
    this.props.storeForecastData(4, position);
    this.props.storeForecastData(5, position);
    this.props.storeForecastData(6, position);

    // this.props.storeWeatherCurrData(position);
    // for(var i = 1; i <= 6; i++){
    //   this.props.storeWeatherHistData(i, position);
    //   this.props.storeForecastData(i, position);
    // }
  }

  handleChange(evt) {
    this.setState({
      input: evt.target.value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.geocoder.geocode({address: this.state.input}, this.receiveLatLng);
    this.setState({input: ''})
  }

  render() {
    // let loc;
    // const initialLoc = {lat: 41.797255, lng: -87.582571};

    if (!this.props.google) {
      return <div>Loading...</div>
    }
    return (
      <div id="map-container">
        <form
          id="search"
          className="form-inline"
          onSubmit={this.handleSubmit}
          >
          <input
            className="form-control input-lg"
            onChange={this.handleChange}
            placeholder="Search weather here"
            value={this.state.input}
          />
          <button
            type="submit"
            className="btn btn-default btn-lg"
            disabled={!this.props.google}
            ><i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
        <div className="map" ref={this.setMapElementReference} >
          <Map
            google={this.props.google}
          />
        </div>
      </div>
    )
  }
}

export default MapContainer;

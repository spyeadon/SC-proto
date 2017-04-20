import React from 'react';
import {Marker} from 'google-maps-react';
import Maps from './Map.jsx';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';

class MapContainer extends React.Component {
  constructor(props){
    super();
    this.state = {
      input: '',
      lat: 59.3293,
      lng: 18.0686
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveLatLng = this.receiveLatLng.bind(this);
  }

  componentDidUpdate() {
    if (this.props.google){
      this.geocoder = new this.props.google.maps.Geocoder();
    }
  }

  receiveLatLng(results) {
    const data = results[0].geometry.location;
    const position = {latitude: data.lat(), longitude: data.lng()}
    this.setState({
      lat: data.lat(),
      lng: data.lng()
    })
    console.log("position is: ", position);
    const dataLocation = results[0].formatted_address;

    this.props.startFreshSearch(dataLocation);

    if (this.props.auth) this.props.addSearchToDB(dataLocation, this.props.auth.id);

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

    if (!this.props.google) {
      return <div>Loading...</div>
    }
    return (
      <div id="map-container">
        <form
          id="search-form"
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
        <div id="map">
          <Maps
            google={this.props.google}
            position={{lat: this.state.lat, lng: this.state.lng}}
          />
        </div>
      </div>
    )
  }
}

export default MapContainer;

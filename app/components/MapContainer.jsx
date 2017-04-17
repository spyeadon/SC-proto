import React from 'react';
import Map, {Marker} from 'google-maps-react';
import Maps from './Map.jsx';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';
// import DarkSkyApi from '../DarkSky.jsx';

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
      // console.log('this in updated lifecycle: ', this);

      // this.map = new this.props.google.maps.Map(this.mapElement, {
      //   zoom: 8,
      //   center: {
      //     lat: 41.797255,
      //     lng: -87.582571
      //   }
      // });
    }
  }

  componentDidMount () {
    console.log('map container did mount');
  }

  componentWillReceiveProps (nextProps) {
    console.log("map container will receive next props");
  }

  setMapElementReference (mapElementReference) {
    this.mapElement = mapElementReference;
  }

  receiveLatLng(results) {
    let data = results[0].geometry.location;
    let position = {latitude: data.lat(), longitude: data.lng()}
    console.log("position is: ", position);

    this.props.storeWeatherData(position);

    // DarkSkyApi.loadForecast(position)
    //   .then(result => {
    //     this.props.storeWeatherData(result.daily);
    //     return result
    //   })
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

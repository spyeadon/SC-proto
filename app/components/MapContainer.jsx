import React from 'react';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';
import ReactDOM from 'react-dom';

export class mapContainer extends React.Component {
  constructor(props){
    super();
  }

  componentDidUpdate() {
    console.log("google object from props: ", this.props);
    this.geocoder = new this.props.google.maps.Geocoder();
    console.log(this.geocoder);
    function handleResults(results) {
      console.log("geocode response results: ", results);
      console.log("lat: ", results[0].geometry.location.lat());
      console.log("long: ", results[0].geometry.location.lng());
    }
    this.geocoder.geocode({address: '5450 S East View Park, Chicago IL'}, handleResults);
  }

  render() {
    // const currentLoc = this.props.google.maps.LatLng.bind()
    const loc = {lat: 59.329323, lng: 18.068581};

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div id="map-container">
        <Map
          google={this.props.google}
          position={loc}
        >
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleMaps_API_KEY
})(mapContainer);

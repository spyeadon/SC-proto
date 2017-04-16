import React from 'react';
import Map, {Marker} from 'google-maps-react';
import {GoogleMaps_API_KEY} from '../../API_KEYS.json';

class MapContainer extends React.Component {
  constructor(props){
    super();
    this.state = {
      input: ''
    }
  }

  componentDidUpdate() {
    const component = this;
    function receiveLatLng(results) {
      console.log("geocode response results: ", results);
      component.props.storeSearchResults(results[0]);
    }
    if (this.props.google){
      this.geocoder = new this.props.google.maps.Geocoder();
      this.geocoder.geocode({address: 'mumbai, india'}, receiveLatLng);
    }
  }

  render() {
    let loc;
    const initialLoc = {lat: 59.329323, lng: 18.068581};

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div id="map-container">
        <form>
          <input />
          <button />
        </form>
        <div id="map">
          <Map
            google={this.props.google}
            position={loc || initialLoc}
          >
          </Map>
        </div>
      </div>
    )
  }
}

export default MapContainer;

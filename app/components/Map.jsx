import React from 'react';
import ReactDOM from 'react-dom';

class Maps extends React.Component {
  constructor(props){
    super();
    this.setMapElementReference = this.setMapElementReference.bind(this);
    this.loadMap = this.loadMap.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadMap(prevProps.position);
  }

  componentWillReceiveProps (nextProps) {
    this.loadMap(nextProps.position);
  }

  componentDidMount () {
    this.loadMap({});
  }

  setMapElementReference (mapElementReference) {
    this.mapElement = mapElementReference;
  }

  loadMap(nextPos) {
    const component = this;
    const maps = this.props.google.maps;

    let zoom = 14;
    let {lat, lng} = this.props.position;
    if (nextPos.lat) {
      let {lat, lng} = nextPos;
    }
    const center = new maps.LatLng(lat, lng);
    const mapConfig = Object.assign({}, {
      center: center,
      zoom: zoom
    })
    this.map = new maps.Map(component.mapElement, mapConfig);
    this.marker = new maps.Marker({
      map: this.map,
      position: {
        lat: lat,
        lng: lng
      }
    });
  }

  render (){
    return (
      <div id="map-ref" ref={this.setMapElementReference}>
      Loading Map...
      </div>
    )
  }

}

export default Maps;

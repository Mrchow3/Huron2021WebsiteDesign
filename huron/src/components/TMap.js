import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css/GoogleMap.css';
const LocationPin = ({ text }) => 
<div className="pin">
    <FontAwesomeIcon icon={faMapPin} className="pin-icon" />
    <p className="pin-text">{text}</p>
</div>;
 
class TMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.538336,
      lng: -81.379234
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      // style={{ height: '92vh', width: '100%' }}
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC09uoFh327yOZXM_AlHhmDakvnMVzk3Co'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationPin
            lat={28.36386}
            lng={-81.57365}
            text="Coronado Springs"
          />
          <LocationPin
            lat={28.370680}
            lng={-81.558660}
            text="Yacht Club"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default TMap;

import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const newGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 39.747112, lng: -104.990486}}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerClick(marker)}
      />
    ))};
  </GoogleMap>
));

export default class GMap extends Component {

  state = { markers: [{ position: { lat: 39.747112, lng: -104.990486, }, key: `denver`, defaultAnimation: 2, }], };

  render() {
    return(
      <div>
        <newGoogleMap
          containerElement={
            <div style={{height: `100%`}}></div>
          }
          mapElement={
            <div style={{height: `100%`}}></div>
          }
          onMapLoad={this.handleMapLoad}
          markers={this.state.markers}
        />
      </div>
    )
  }
}

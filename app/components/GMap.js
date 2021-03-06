import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class GMap extends Component {
  render() {
    var lat = this.props.location.lat
    var lng = this.props.location.lng

    return (
      <div>
        <h2 className='map-header'>
          <span className="map-header-text">
            Where
          </span>
        </h2>
        <Map google={this.props.google}
          className={'map'}
          zoom={14}
          center={ { lat: lat, lng: lng } }
        >
          <Marker
            name={'Denver'}
            position={ { lat: lat, lng: lng } }
          />
        </Map>
      </div>
    )
  }
};

GMap.propTypes = {
  location: React.PropTypes.object.isRequired
}

GMap.defaultProps = {
  location: { lat: 39.747112, lng: -104.990486}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCu4a_6Bz4MDInTrjGkxajqPJdKz2ffE4'
})(GMap)

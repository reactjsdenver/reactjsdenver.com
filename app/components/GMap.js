import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class GMap extends Component {
  render() {
    var style = {
      width: '400px',
      height: '400px',
    }
    var lat = this.props.location.lat
    var lng = this.props.location.lng

    return (
      <div className='map-container'>
        <Map google={this.props.google}
          style={style}
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
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCu4a_6Bz4MDInTrjGkxajqPJdKz2ffE4'
})(GMap)

import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class GMap extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className='map-container'>
        <Map google={this.props.google} style={{width: '400px', height: '400px', position: 'relative'}}
          className={'map'}
          zoom={14}
          center={{lat: 39.747112, lng: -104.990486}}
        >
          <Marker
            name={'Denver'}
            position={{lat: 39.747112, lng:-104.990486}} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCu4a_6Bz4MDInTrjGkxajqPJdKz2ffE4'
})(GMap)

import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import Map from './Map';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '500px',
      height: '500px'
    }

    return (
      <div className='map-container' style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCu4a_6Bz4MDInTrjGkxajqPJdKz2ffE4'
})(MapContainer)

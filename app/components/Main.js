import React, {Component} from 'react';
import Header from './Header';
import Talk from './Talk';
import MapContainer from './MapContainer';

export default class Main extends Component{

  render(){
    return(
      <div className="main-app">
      <Header />
      <Talk />
      <MapContainer />
      </div>
    );
  }
}

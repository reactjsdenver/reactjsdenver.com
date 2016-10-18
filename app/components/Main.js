import React, {Component} from 'react';
import Header from './Header';
import Talk from './Talk';
import GMap from './GMap';

export default class Main extends Component{

  render(){
    return(
      <div className="main-app">
      <Header />
      <Talk />
      <GMap />
      </div>
    );
  }
}

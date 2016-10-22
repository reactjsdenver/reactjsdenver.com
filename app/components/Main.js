import React, {Component} from 'react';
import Header from './Header';
import Talk from './Talk';
import Meetup from './Meetup';

export default class Main extends Component{

  render(){
    return(
      <div className="main-app">
      <Header />
      <Meetup />
      <Talk />
      </div>
    );
  }
}

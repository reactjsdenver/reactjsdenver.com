import React, {Component} from 'react'
import Header from './Header'
import Talk from './Talk';

export default class Main extends Component{

  render(){
    return(
      <div>
      <Header />
      <Talk />
      </div>
    );
  }
}

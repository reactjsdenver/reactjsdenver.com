import React, {Component} from 'react'

export default class Header extends Component {

  render() {
    return (
      <nav className="ui header">
        <div className="react-denver-logo">
          <h2 className="logo-text-denver">Denver</h2>
            <img className='react-logo' src="/style/images/react-logo.png" alt="react logo" />
            <h2 className="logo-text-js">JS</h2>
        </div>
      </nav>
    );
  }
};

import React from 'react';

class Meetup extends React.Component {
  render() {
    return (
      <div className="meetup-main">
        <h1 className="text typing one">Denver's monthly</h1> <br/>
        <h1 className="text typing two">React meetup</h1>
        <h2 className="text typing three">Next meeting is on
          <span className="meetup-date"> {this.props.date}</span>
        </h2>
        <a className="ui button meetup-button"
          href="http://www.meetup.com/ReactJS-Denver">
          RSVP & Join us on Meetup
        </a>
      </div>
    )
  }
}

export default Meetup;

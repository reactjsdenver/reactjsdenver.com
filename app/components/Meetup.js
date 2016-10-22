import React from 'react';

class Meetup extends React.Component {
   constructor() {
     super()

     this.state = { meetupDate : "" }
     console.log('constructor')
   }

  componentWillMount() {
    window.parseData = function(res) {
      var timeInMilliseconds = res.results[0].time
      var  date = new Date(timeInMilliseconds)
      var dateToString = date.toString().split(' ')
      var cleanDate = ' ' + dateToString[1] + ' ' + dateToString[2]
      this.setState( {meetupDate: cleanDate} )
      }.bind(this)
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.meetup.com/2/events?group_urlname=ReactJS-Denver&callback=parseData";
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="meetup-main">
        <h1 className="text typing one">Denver's monthly</h1> <br/>
        <h1 className="text typing two">React meetup</h1>
        <h2 className="text typing three">Next meeting is on
          <span className="meetup-date"> {this.state.meetupDate}</span>
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

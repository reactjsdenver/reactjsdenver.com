import React, {Component} from 'react';
import Header from './Header';
import Talk from './Talk';
import GMap from './GMap';
import Meetup from './Meetup';

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      date: "",
      location: { lat: "", lng: ""}
    }
  }

  componentWillMount() {
    window.parseData = function(res) {
      this.getMeetupDate(res)
      this.getMeetupLocation(res)
      }.bind(this)
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.meetup.com/2/events?group_urlname=ReactJS-Denver&callback=parseData";
    document.body.appendChild(script);
  }

  getMeetupDate(res) {
    var timeInMilliseconds = res.results[0].time
    var  date = new Date(timeInMilliseconds)
    var dateToString = date.toString().split(' ')
    var date = ' ' + dateToString[1] + ' ' + dateToString[2]
    this.setState( {date: date} )
  }

  getMeetupLocation(res) {
    var venue = res.results[0].venue
    var lat = venue.lat
    var lng = venue.lon
    this.setState({ location: { lat: lat, lng: lng } })
  }

  render() {
    return(
      <div className="main-app">
        <Header />
        <Meetup date={this.state.date}/>
        <Talk />
        <GMap location={this.state.location}/>
      </div>
    );
  }
};

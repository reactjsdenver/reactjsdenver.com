import React, {Component} from 'react'

export default class Talk extends Component {

  render() {
    return (
      <div className="talk-card">
        <div className="ui grid center aligned">

        <h2 className="text-color-white"> The Talks</h2>

        <div className="row talk-background divided" >
          <div className="center aligned eight wide column ">
            <h3>Free Slot</h3>
            <h4>This slot could be yours</h4>
              <button className="ui basic button">
                  Submit A Talk
              </button>
            <h5>Do you need a talk idea?
              <br />We got you covered,
                <a href="www.google.com">Click Me!</a>
            </h5>
          </div>
          <div className="center aligned eight wide column">
            <h3>Free Slot</h3>
            <h4>This slot could be yours</h4>
              <button className="ui basic button">
                  Submit A Talk
              </button>
            <h5>Do you need a talk idea?
              <br />We got you covered,
                <a href="www.google.com">Click Me!</a>
            </h5>

          </div>
        </div>
      </div>
      </div>
    );
  }
};

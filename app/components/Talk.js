import React, {Component} from 'react'

export default class Talk extends Component{

  render(){
    return(
      <div className="ui grid">

            <h2 className="center aligned text-color-white"> The Talks</h2>

        <div className="row talk-background">
          <div className="eight wide column">
            <h3>Free Slot</h3>
            <h4>This slot could be yours</h4>
            <h5>Do you need a talk idea?
              <br />We got you covered,
                <a href="www.google.com">Click Me!</a>
            </h5>
          </div>
          <div className="eight wide column">
            <h3>Free Slot</h3>
            <h4>This slot could be yours</h4>
            <h5>Do you need a talk idea?
              <br />We got you covered,
                <a href="www.google.com">Click Me!</a>
            </h5>

          </div>
        </div>

      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router-dom';

class PlayButton extends React.Component {

  constructor() {
    super();
    this.state = { pause: false };
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause(e) {
    e.preventDefault();
    this.setState({
      pause: !this.state.pause
    });
  }

  render() {
    return(
      <div className="playbuttonshow-div">
          <i className={this.state.pause ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
      </div>

  );
  }
}

export default PlayButton;

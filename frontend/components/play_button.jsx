import React from 'react';


class PlayButton extends React.Component {

  constructor(props) {
    super(props);
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
    <div className="playbutton-div">
        <i className={this.state.pause ? "fa fa-play" : "fa fa-pause"} aria-hidden="true" onClick={this.handlePlayPause}></i>
    </div>
  );
  }
}

export default PlayButton;

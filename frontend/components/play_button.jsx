import React from 'react';


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
    <div className="button-parent">
      <div className="playbutton-div">
          <i className={this.state.pause ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
      </div>
      <div className="songplay-div">
        <span className="songartist">{this.props.name}</span>
        <span className="songtitle">{this.props.title}</span>
      </div>
    </div>

  );
  }
}

export default PlayButton;

import React from 'react';
import { Link } from 'react-router-dom';
import { playSong, pauseSong } from '../actions/audio_actions';
import { connect } from 'react-redux';

class PlayButtonShow extends React.Component {

  constructor() {
    super();

    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause(e) {
    e.preventDefault();
    this.props.setQueue(this.props.songId);
    debugger
    if (this.props.status === 'playing' && this.props.currentTrack === this.props.songId) {
      this.props.pauseSong();
    } else {
      this.props.playSong();
    }
  }

  render() {
    return(
      <div className="playbuttonshow-div">
          <i className={this.props.status === 'playing' && this.props.currentTrack === this.props.songId ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
      </div>

  );
  }
}

const mapStateToProps = (state) => {
  return ({
      currentTrack: state.audio.currentTrackId,
      status: state.audio.status
    });
  };

const mapDispatchToProps = (dispatch) => {
  return({
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButtonShow);

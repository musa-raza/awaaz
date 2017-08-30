import React from 'react';
import { connect } from 'react-redux';
import { playSong, pauseSong, updateQueue, setQueue } from '../actions/audio_actions';
import { requestSingleSong } from '../actions/song_actions';
import { withRouter } from 'react-router-dom';
import { selectSingleSong } from '../reducers/selectors';

class AudioPlayer extends React.Component {


  constructor(props) {
    super(props);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.state = {
      elapsedTime: "",
      totalTime: ""
    }
  }

  tickSeconds() {
    const audio = document.getElementById("audio");
    const time = audio.currentTime;

    this.setState({})
  }

  parseMinutes(secs) {
    let mins = secs % 60;
    mins < 10 ? `0${minutes}` : mins;
  }

  componentWillReceiveProps(newProps) {
    const audio = document.getElementById("audio");
    if (this.props.status != 'playing' && newProps.status === 'playing') {
      audio.src = newProps.currentTrackObject.audio_url;
    } else if (this.props.status === 'playing' && this.props.currentTrack != newProps.currentTrack) {
      audio.src = newProps.currentTrackObject.audio_url;
      }
    if (newProps.status === 'playing') {
      audio.play();
    } else if (newProps.status === 'paused') {
      audio.pause();
    }
    audio.onended = this.props.updateQueue;
  }

// if this.props status is not playing and next props status is playing,
// then i would set audio src to nextprops.cto.audio_url.
// if the current status is playing and new props is playing and the current track id != newProps.currentTrackId, then
// source == newProps.currentTrackObject.AudioPlayer



  handlePlayPause(e) {
    e.preventDefault();
    if (this.props.status === 'playing') {
      this.props.pauseSong();
    } else {
      this.props.playSong();
    }
  }

  handleForward(e) {
    const audio = document.getElementById("audio");
    audio.currentTime = audio.duration;
  }

  handleStart

  render() {
    return(
      <div className="bottom">
        <footer className="footer-play">
          <div className="house-playbardiv">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
            <i className={(this.props.status === 'playing') ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlay}></i>
            <i className="fa fa-step-forward" aria-hidden="true" onClick={this.handleForward}></i>
            <i className="fa fa-random" aria-hidden="true"></i>
            <i className="fa fa-retweet" aria-hidden="true"></i>
            <div className="progress">
              <div className="elapsedTime">

              </div>
            </div>
            <audio id="audio"></audio>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    currentTrack: state.audio.queue[0],
    status: state.audio.status,
    currentTrackObject: selectSingleSong(state, state.audio.queue[0])
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    requestSingleSong: (id) => dispatch(requestSingleSong(id)),
    updateQueue: () => dispatch(updateQueue()),
    setQueue: () => dispatch(setQueue())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

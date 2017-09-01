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
      elapsedTime: 0,
      totalTime: 0
    };
    this.tickSeconds = this.tickSeconds.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
  }

  tickSeconds() {
    const audio = document.getElementById("audio");
    const time = Math.floor(audio.currentTime);
    if ( isNaN(audio.duration)) {
      return this.setState({
        totalTime: 0
      });
    }
    this.setState({
      elapsedTime: time,
      totalTime: Math.floor(audio.duration)
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tickSeconds, 900);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  parseTime(secs) {
    let mins = Math.floor((secs / 60) % 60);
    let seconds = Math.floor(secs % 60);
    mins = mins < 10 ? `0${mins}` : mins;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let result = `${mins}:${seconds}`;
    if (!result){
      return "0:00";
    } else {
      return result;
    }
  }

  componentWillReceiveProps(newProps) {
    const audio = document.getElementById("audio");
    // if (this.props.status != 'playing' && newProps.status === 'playing') {
    //   audio.src = newProps.currentTrackObject.audio_url;
    // } else if (this.props.status === 'playing' && this.props.currentTrack != newProps.currentTrack) {
    //   audio.src = newProps.currentTrackObject.audio_url;
    // }
    if (this.props.currentTrack != newProps.currentTrack) {
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


  handleRewind(e) {
    e.preventDefault();
    const audio = document.getElementById("audio");
    audio.currentTime = 0;
  }

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


  render() {
    let albumart;
    let tracktitle;
    let trackartist;
    let orig = this;
    if (this.props.currentTrackObject) {
      albumart = (
        <img className="footer-albumart" src={this.props.currentTrackObject.image_url}
          />
      );
        tracktitle = (
          <span className="footer-textinfo">Song: {this.props.currentTrackObject.title}</span>
        );
        trackartist = (
          <span className="footer-textinfo">Artist: {this.props.currentTrackObject.user_name}</span>
        );
    }
    if (this.props.currentTrackObject) {
    }
    return(
      <div className="bottom">
        <div className="footer-play">
          <div className="house-playbardiv">
              <i className="fa fa-step-backward" aria-hidden="true" onClick={this.handleRewind}></i>
              <i className={(this.props.status === 'playing') ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
              <i className="fa fa-step-forward" aria-hidden="true" onClick={this.handleForward}></i>
              <i className="fa fa-random" aria-hidden="true"></i>
              <i className="fa fa-retweet" aria-hidden="true"></i>
              <div className="progressbar-div">
                <div className="elapsedTime">
                  {this.parseTime(this.state.elapsedTime)}
                </div>
                <div className="progress-div">
                  <div className="color-div" style= {{width: `${(this.state.elapsedTime / this.state.totalTime)* 100}%`}} />
                </div>
                <div className="totalTime">
                  {this.parseTime(this.state.totalTime)}
                </div>
              </div>
              <div className="albuminfo-house">
              <div className="track-info">
                  <div className="playeralbum-info">
                    {albumart}
                  </div>
                  <div className="songinfo-footer">
                    {tracktitle}
                     {trackartist}
                  </div>
                </div>
              </div>
            </div>
            <audio id="audio"></audio>
          </div>
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

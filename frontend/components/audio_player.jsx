import React from 'react';
import { connect } from 'react-redux';
import { playSong, pauseSong, updateQueue, setQueue, rewindSong, updateTime } from '../actions/audio_actions';
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
      totalTime: 0,
      duration: null,
      repeatColor: 'black'
    };
    this.tickSeconds = this.tickSeconds.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleRepeat = this.handleRepeat.bind(this);
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
    // console.log(this.slider.value);
    // const slider = document.getElementById('progress-slider');
      // console.log(this.slider.value);
    this.slider.value = 0;
    		this.currentTimeInterval = null;
        const orig = this;


    		this.audio.onloadedmetadata = function() {
          orig.slider.max = parseInt(orig.audio.duration).toString();
        };

    		this.audio.onplay = () => {
    			this.currentTimeInterval = setInterval( () => {
    				orig.slider.value = orig.audio.currentTime;
            orig.props.updateTime(orig.audio.currentTime);
    			}, 500);
    		};

    		this.audio.onpause = () => {
      	clearInterval(this.currentTimeInterval);
    		};

    		this.slider.onchange = (e) => {
          this.audio.currentTime = parseInt(orig.slider.value);
    		};
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
    // const audio = document.getElementById("audio");
    if (this.props.location.pathname === `/songs/${this.props.currentTrack}`) {
      this.audio.currentTime = 0;
    } else {
      if (this.audio.currentTime > 5) {
        this.audio.currentTime = 0;
      } else {
        this.props.rewindSong(this.props.queue);
      }
    }
  }

  handlePlayPause(e) {
    e.preventDefault();
    if (this.props.status === 'playing') {
      this.props.pauseSong();
    } else {
      this.props.playSong();
    }
  }

  handleRepeat(e) {
    e.preventDefault();
    this.audio.loop = this.audio.loop === true ? false : true;
    if (this.state.repeatColor === 'black') {
      this.setState({
        repeatColor: '#f50'
      });
    } else {
      this.setState({
        repeatColor: 'black'
      });
    }
  }

  // handleSeek(e) {
  //   // e.preventDefault();
  //   // const orig = this;
  //   // const audio = document.getElementById("audio");
  //   // const slider = document.getElementById("progress-slider");
  //   // slider.addEventListener('mousedown', function(e) { orig.seeking=true; orig.seek(e);});
  //   // slider.addEventListener('mousemow', function(e) { orig.seek(e);});
  //   this.audio.currentTime = this.slider.value * (this.state.currentTime/this.state.elapsedTime);
  // }

  handleForward(e) {
    const audio = document.getElementById("audio");
    audio.currentTime = audio.duration;
  }

  handleVolume(e) {
    const volume = document.getElementById("volume");
    const audio = document.getElementById("audio");
    audio.volume = volume.value;
  }

  handleTime(e) {
    const audio = document.getElementById("audio");
    const slider = document.getElementById("progress-slider");
    slider.value = audio.currentTime;
  }


  render() {
    let albumart;
    let tracktitle;
    let trackartist;
    let orig = this;
    if (this.props.currentTrackObject && (this.props.status === 'playing' || this.props.status === 'paused')) {
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

    return(
      <div className="bottom">
        <div className="footer-play">
          <div className="house-playbardiv">
              <i className="fa fa-step-backward" aria-hidden="true" onClick={this.handleRewind}></i>
              <i className={(this.props.status === 'playing') ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
              <i className="fa fa-step-forward" aria-hidden="true" onClick={this.handleForward}></i>
                <i className="fa fa-repeat" style={{color: this.state.repeatColor}} aria-hidden="true" onClick={this.handleRepeat}></i>
              <div className="progressbar-div">
                <div className="elapsedTime">
                  {this.parseTime(this.state.elapsedTime)}
                </div>
                <div className="progress-div">
                  <div className="color-div"/>
                  <input id="progress-slider" className="color-div" ref={(slider) => {this.slider = slider;}} type="range" min="0" step="1"  />
                </div>
                <div className="totalTime">
                  {this.parseTime(this.state.totalTime)}
                </div>
                <div className="volume-div">
                  <i className="fa fa-volume-up" aria-hidden="true"></i><input id="volume" type="range" min="0" max="1" step="0.1" onChange={this.handleVolume} />
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
            <audio ref={(audio) => {this.audio = audio;}} id="audio"></audio>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    currentTrack: state.audio.queue[0],
    status: state.audio.status,
    currentTrackObject: selectSingleSong(state, state.audio.queue[0]),
    queue: state.audio.queue
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    requestSingleSong: (id) => dispatch(requestSingleSong(id)),
    updateQueue: () => dispatch(updateQueue()),
    setQueue: () => dispatch(setQueue()),
    rewindSong: (queue) => dispatch(rewindSong(queue)),
    updateTime: (time) => dispatch(updateTime(time))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AudioPlayer));

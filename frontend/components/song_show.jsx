import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleSong } from '../actions/song_actions';
import PlayButtonShow from './play_button_show';
import { setQueue } from '../actions/audio_actions';
import Moment from 'react-moment';
import CommentIndex from './comments/comment_index';
import CommentContainer from './comments/comment_container';
import Wavesurfer from 'react-wavesurfer';

class SongShow extends React.Component {

constructor(props) {
  window.scrollTo(0, 0);
  super(props);
  this.wavesurfer = null;
  this.state = {
    playing: false,
    pos: 0,
    volume: 0
  };
  this.handleTogglePlay = this.handleTogglePlay.bind(this);
  this.handlePosChange = this.handlePosChange.bind(this);
  this.handleSurfClick = this.handleSurfClick.bind(this);
  this.wavesurfer = null;
}

componentWillReceiveProps(newProps) {
  const audio = document.getElementById("audio");
  if (newProps.status === "playing" && newProps.currentTrack === newProps.song.id && newProps.time) {
this.setState({playing: true, volume: 0, pos: newProps.time});
} else if (newProps.status === "paused" && newProps.currentTrack === newProps.song.id) {
this.setState({playing: false, volume: 0, pos: audio.currentTime});
}
else if (newProps.status === "playing" && newProps.currentTrack != newProps.song.id) {
    this.setState({playing: false, volume: 0, pos: 0});
}
}

handleTogglePlay() {
  this.setState({
    playing: !this.state.playing
  });
}

handlePosChange(e) {
  this.setState({
    pos: e.originalArgs[0]
  });
}


handleSurfClick(e) {
  const audio = document.getElementById("audio");
  let clickpos = (e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.clientWidth;
  audio.currentTime = clickpos * audio.duration;
}

componentDidMount() {
  this.props.requestSingleSong(this.props.match.params.songId);
}

setQueue(id) {
  this.props.setQueue(this.props.song, id);
}

render() {
  if (this.props.song === null) {
    return null;
  }
  let dateTime = this.props.song.created_at;
  return(
    <div className="songshow-parent">
      <div className="songshow-header">
        <div className="song-info">
          <div className="button-div">
            <PlayButtonShow
              id={this.props.song.id}
              setQueue={this.setQueue.bind(this)}
              song={this.props.song}
              songId={this.props.song.id}
              />
            <div className="songshow-info">
              <span className="songheader-name">
                {this.props.song.user_name}
              </span>
              <span className="songheader-title">
                {this.props.song.title}
              </span>
            </div>
            <div className="genre-div">
              <span>#{this.props.song.genre}</span>
            </div>
            </div>
            <div className="alb-div">
            <Moment className="moment-text" fromNow>{dateTime}</Moment>
          <img className="songshow-albumart" src={this.props.song.image_url} />
          </div>
          <div className="songshow-wave" onClick={this.handleSurfClick}>
            <Wavesurfer
                audioFile={this.props.song.audio_url}
                onPosChange={this.handlePosChange}
                playing={this.state.playing}
                pos={this.state.pos}
                onClick={this.handleSurfClick}
                volume='0'
                options={{waveColor: 'white',
                  progressColor:'#f50',
                  barWidth: 2,
                  height: 100}}

                  ref={(Wavesurfer) => {this.wavesurfer = Wavesurfer;}}
                  />
            </div>
        </div>
      </div>
      <div className="comment-containerdiv"></div>
      <CommentContainer song={this.props.song}/>
      </div>
  );
}

}

const mapStateToProps = (state, ownProps) => {
  let song;
  if (state.entities.songs[ownProps.match.params.songId]) {
    song = state.entities.songs[ownProps.match.params.songId];
  }
  else {
    song = null;
  }
  return({
    song,
    currentTrack: state.audio.currentTrackId,
    status: state.audio.status,
    time: state.audio.time
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    requestSingleSong: (song) => (dispatch(requestSingleSong(song))),
    setQueue: (song, id) => (dispatch(setQueue(song, id)))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongShow));

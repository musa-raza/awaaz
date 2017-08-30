import React from 'react';
import { connect } from 'react-redux';
import { playSong, pauseSong, updateQueue } from '../actions/audio_actions';
import { requestSingleSong } from '../actions/song_actions';
import { withRouter } from 'react-router-dom';
import { selectSingleSong } from '../reducers/selectors';

class AudioPlayer extends React.Component {


  constructor(props) {
    super(props);
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

  render() {
    return(
      <div className="audio-parentdiv">
        <audio id="audio"></audio>
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
    updateQueue: () => dispatch(updateQueue())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

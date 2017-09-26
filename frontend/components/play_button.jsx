import React from 'react';
import { Link } from 'react-router-dom';
import { playSong, pauseSong } from '../actions/audio_actions';
import { connect } from 'react-redux';
import { selectSingleSong } from '../reducers/selectors';

class PlayButton extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }


  handlePlayPause(e) {
    e.preventDefault();
    this.props.setQueue(this.props.songId);
    if (this.props.status === 'playing'  && this.props.songId === this.props.currentTrack) {
      this.props.pauseSong();
    } else {
      this.props.playSong();
    }
  }



  render() {
    return(
    <div className="button-parent">
      <div className="playbutton-div">
          <i className={(this.props.currentTrack === this.props.songId && this.props.status === 'playing') ? "fa fa-pause" : "fa fa-play"} aria-hidden="true" onClick={this.handlePlayPause}></i>
      </div>
      <div className="songplay-div">
        <span className="songartist">
          <Link to={`/users/${this.props.name}`}>
            {this.props.name}
          </Link>
        </span>
        <span className="songtitle">
          <Link to={`/songs/${this.props.id}`}>
            {this.props.title}
          </Link>
        </span>
      </div>
    </div>

  );
  }
}

const mapStateToProps = (state) => {
  return ({
      currentTrack: state.audio.currentTrackId,
      status: state.audio.status,
      currentTrackObject: selectSingleSong(state, state.audio.queue[0])
    });
  };

const mapDispatchToProps = (dispatch) => {
  return({
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleSong } from '../actions/song_actions';
import  PlayButtonShow from './play_button_show';
import Moment from 'react-moment';
import CommentIndex from './comments/comment_index';
import CommentContainer from './comments/comment_container';

class SongShow extends React.Component {

constructor(props) {
  super(props);
}

componentDidMount() {
  this.props.requestSingleSong(this.props.match.params.songId);
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
              />
            <div className="songshow-info">
              <span className="songheader-name">
                {this.props.song.user_name}
              </span>
              <span className="songheader-title">
                {this.props.song.title}
              </span>
            </div>
            </div>
            <div className="alb-div">
            <Moment className="moment-text" fromNow>{dateTime}</Moment>
          <img className="songshow-albumart" src={this.props.song.image_url} />
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
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    requestSingleSong: (song) => (dispatch(requestSingleSong(song)))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongShow));

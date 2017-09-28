import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { requestAUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { selectUserSongs, isLiked } from '../../reducers/selectors';
import { setUserQueue } from '../../actions/audio_actions';
import { deleteSong } from '../../actions/song_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
const mapStateToProps = (state, ownProps) => {
  let user;
  if (state.entities.users[ownProps.match.params.username]) {
    user = state.entities.users[ownProps.match.params.username];
  }
  else {
    user = null;
  }
  return({
    user,
    songs: selectUserSongs(state, user),
    currentUser: state.session.currentUser,
    currentTrackObject: state.audio.currentTrackObject,
    currentTrack: state.audio.currentTrackId,
    status: state.audio.status,
    time: state.audio.time
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    requestAUser: (user) => (dispatch(requestAUser(user))),
    setUserQueue: (songs, id) => (dispatch(setUserQueue(songs, id))),
    deleteSong: (song) => (dispatch(deleteSong(song))),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
  });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));

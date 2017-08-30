import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { requestAUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { selectUserSongs } from '../../reducers/selectors';
import { setUserQueue } from '../../actions/audio_actions';

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
    songs: selectUserSongs(state, user)
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    requestAUser: (user) => (dispatch(requestAUser(user))),
    setUserQueue: (songs, id) => (dispatch(setUserQueue(songs, id)))
  });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));

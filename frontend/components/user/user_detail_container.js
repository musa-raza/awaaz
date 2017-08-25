import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { requestAUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let user;
  if (state.entities.users[ownProps.match.params.username]) {
    user = state.entities.users[ownProps.match.params.username];
  }
  else {
    user = null;
  }
  return({
    user
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    requestAUser: (user) => (dispatch(requestAUser(user)))
  });
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));

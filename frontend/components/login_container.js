import { connect } from 'react-redux';
import Login from './login';
import { login, signup, logout } from '../actions/session_actions';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);

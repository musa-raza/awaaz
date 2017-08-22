import { connect } from 'react-redux';
import { signup, login } from '..actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType;
  formType = ownProps.location.pathname === '/signup' ? 'Sign Up' : 'Login';
  let bool;
  bool = state.session.currentUser ? true : false;
  return({
    loggedIn: bool,
    errors: state.session.errors,
    formType: formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  formType = ownProps.location.pathname === '/signup' ? 'singup' : 'login';
  if (formType === 'signup'){
    return({
      processForm: (user) => dispatch(signup(user))
    });
  }
  else {
    return({
      processForm: (user) => dispatch(login(user))
    });
  }
};

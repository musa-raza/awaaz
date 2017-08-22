import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType;
  formType = ownProps.form === 'signup' ? 'Sign Up' : 'Login';
  let bool;
  bool = state.session.currentUser ? true : false;
  return({
    loggedIn: bool,
    errors: state.session.errors,
    formType: formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const func = ownProps.form === 'signup' ? signup : login;
  return {
    processForm: (user) => dispatch(func(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

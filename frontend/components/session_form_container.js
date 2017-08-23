import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../actions/session_actions';
import SessionForm from './session_form';
import { receiveModal, removeModal, loginModal, signupModal} from '../actions/ui_actions';

const mapStateToProps = (state) => {
  let formType;
  formType = state.ui.formType === 'signup' ? 'Sign Up' : 'Login';
  let bool;
  bool = state.session.currentUser ? true : false;
  return({
    loggedIn: bool,
    errors: state.session.errors,
    formType: formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const func = ownProps.formType === 'signup' ? signup : login;
  return {
    processForm: (user) => dispatch(func(user)),
    removeModal: () => dispatch(removeModal()),
    removeErrors: (errors) => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

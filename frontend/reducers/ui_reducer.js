import { SHOW_MODAL, HIDE_MODAL, LOGIN_MODAL, SIGNUP_MODAL } from '../actions/ui_actions';


const initialState = {
  modalOpen: false
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case HIDE_MODAL:
      return({
        modalOpen: false
      });
    case LOGIN_MODAL:
      return({
        modalOpen: true,
        formType: 'login'
      });
    case SIGNUP_MODAL:
      return({
        modalOpen: true,
        formType: 'signup'
      });
    default:
      return state;
  }
};


export default uiReducer;

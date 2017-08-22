import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = ( state = nullUser, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
    }
  };


export default sessionReducer;

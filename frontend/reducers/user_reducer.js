import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';


const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_USER:
      newState = merge({}, state);
      newState[action.user.username] = action.user;
      return newState;
    default:
      return state;
  }
};


export default userReducer;

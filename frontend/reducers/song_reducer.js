import { RECEIVE_SONGS, RECEIVE_A_SONG } from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
     case RECEIVE_SONGS:
      return action.songs;
    case RECEIVE_A_SONG:
      newState[action.payload.id] = action.payload;
      return newState;
    case RECEIVE_USER:
       return action.user.songs;
    default:
      return state;
  }
};

export default songReducer;

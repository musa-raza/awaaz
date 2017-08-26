import { RECEIVE_SONGS, RECEIVE_A_SONG } from '../actions/song_actions';
import merge from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
     case RECEIVE_SONGS:
      newState.songs = action.songs;
      return newState;
    case RECEIVE_A_SONG:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default songReducer;

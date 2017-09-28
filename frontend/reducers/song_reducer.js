import { RECEIVE_SONGS, RECEIVE_A_SONG, DELETE_SONG } from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_A_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, RECEIVE_UNLIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const songReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.payload.songs;
    case RECEIVE_A_SONG:
      // newState[action.payload.id] = action.payload;
      newState = merge( {}, state, { [action.payload.id]: action.payload } );
      delete newState[action.payload.id].comments;
      return newState;
    case DELETE_SONG:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_USER:
      if (action.user.songs === undefined) {return {};}
       return action.user.songs;
    case RECEIVE_A_COMMENT:
      newState = merge({}, state);
      newState[action.comment.song_id].comment_ids.push(action.comment.id);
      return newState;
    case RECEIVE_LIKE:
      newState = merge({}, state);
      newState[action.like.song_id].like_ids.push(action.like.user_id);
    return newState;
    case RECEIVE_UNLIKE:
      newState = merge({}, state);
      let pos = newState[action.like.song_id].like_ids.indexOf(action.like.user_id);
      newState[action.like.song_id].like_ids.splice(pos, 1);
      return newState;
    default:
      return state;
  }
};

export default songReducer;

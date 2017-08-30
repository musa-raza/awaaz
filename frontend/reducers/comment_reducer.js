import { RECEIVE_A_SONG, RECEIVE_SONGS} from '../actions/song_actions';
import { RECEIVE_A_COMMENT, REMOVE_A_COMMENT, RECEIVE_COMMENTS  } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_SONGS:
      if (action.payload.comments === undefined) {
        return {};
      }
      return action.payload.comments;
    case RECEIVE_A_SONG:
      if (action.payload.comments === undefined) { return {};}
      return action.payload.comments;
    case RECEIVE_A_COMMENT:
      newState = merge({}, state, { [action.comment.id]: action.comment });
      return newState;
    case REMOVE_A_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;

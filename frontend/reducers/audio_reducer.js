import { PLAY_SONG, PAUSE_SONG, SET_QUEUE, UPDATE_QUEUE, SET_USER_QUEUE, REWIND_SONG, UPDATE_TIME } from '../actions/audio_actions';
import { merge } from 'lodash';

const initialState = {
  currentTrackId: undefined,
  status: '',
  queue: [],
  rewindQueue: []
};


const audioReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
      return({
        currentTrackId: state.queue[0],
        status: 'playing',
        queue: state.queue,
        rewindQueue: action.rewindQueue
      });
    case PAUSE_SONG:
      return({
        currentTrackId: state.queue[0],
        status: 'paused',
        queue: state.queue
      });
    case SET_QUEUE:
      return({
        currentTrackId: action.queue[0],
        status: 'playing',
        queue: action.queue,
      });
    case UPDATE_QUEUE:
      return({
        currentTrackId: state.queue[1],
        status: 'playing',
        queue: state.queue.slice(1),
      });
    case SET_USER_QUEUE:
     return({
       currentTrackId: action.queue[0],
       status: 'playing',
       queue: action.queue,
     });
     case REWIND_SONG:
      return({
        currentTrackId: action.queue[0],
        status: 'playing',
        queue: action.queue
      });
      case UPDATE_TIME:
      let newState = merge({}, state);
      newState.time = action.time;
      return newState;
    default:
     return state;
  }

};

export default audioReducer;

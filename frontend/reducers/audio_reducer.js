import { PLAY_SONG, PAUSE_SONG, SET_QUEUE, UPDATE_QUEUE, SET_USER_QUEUE } from '../actions/audio_actions';

const initialState = {
  currentTrackId: undefined,
  status: '',
  queue: []
};

const audioReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
      return({
        currentTrackId: state.queue[0],
        status: 'playing',
        queue: state.queue
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
        queue: action.queue
      });
    case UPDATE_QUEUE:
      return({
        currentTrackId: state.queue[1],
        status: 'playing',
        queue: state.queue.slice(1)
      });
    case SET_USER_QUEUE:
     return({
       currentTrackId: action.queue[0],
       status: 'playing',
       queue: action.queue
     });
    default:
     return state;
  }

};

export default audioReducer;

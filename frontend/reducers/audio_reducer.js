import { PLAY_SONG, PAUSE_SONG } from '../actions/audio_actions';


const initialState = {
  audioPlay: false
};

const audioReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
    return({
      audioPlay: true
    });
    case PAUSE_SONG:
    return({
      audioPlay: false
    });
    default:
     return state;
  }

};

export default audioReducer;

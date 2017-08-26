import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import songReducer from './song_reducer';
import audioReducer from './audio_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  songs: songReducer,
  audio: audioReducer
});

export default entitiesReducer;

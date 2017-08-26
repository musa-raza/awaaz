import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import songReducer from './song_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  songs: songReducer
});

export default entitiesReducer;

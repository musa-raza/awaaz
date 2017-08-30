import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import audioReducer from './audio_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  entities: entitiesReducer,
  audio: audioReducer
});

export default rootReducer;

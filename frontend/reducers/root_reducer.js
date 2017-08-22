import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer
});

export default rootReducer;

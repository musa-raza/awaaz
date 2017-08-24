import { combineReducers } from 'redux';
import userReducer from './user_reducer';


const entitiesReducer = combineReducers({
  users: userReducer
});

export default entitiesReducer;

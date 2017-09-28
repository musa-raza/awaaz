import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const {createLogger} = require('redux-logger');
  middlewares.push(createLogger());
}

export const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};

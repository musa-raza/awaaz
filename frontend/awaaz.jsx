import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import { configureStore } from './store/store';
import Root from './components/root';
import { requestAUser } from './actions/user_actions';
import { fetchAUser } from './util/user_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchAUser = fetchAUser;
  window.requestAUser = requestAUser;
  //END TESTING
  ReactDOM.render(<Root store={store} />, root);
});

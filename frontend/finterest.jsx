import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  ReactDOM.render(<h1>JS hooked..</h1>, root);
});

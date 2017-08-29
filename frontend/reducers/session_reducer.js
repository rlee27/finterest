import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = defaultState, action) => {
  let nextState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = merge({}, state, {currentUser: action.currentUser.user});
      return nextState;
    case RECEIVE_ERRORS:
      nextState = merge({}, state, {errors: action.errors});
      return nextState;
    case CLEAR_ERRORS:
      nextState = Object.assign({}, state, {errors: []});
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;

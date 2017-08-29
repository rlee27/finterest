import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = {
  user: {},
  board_ids: [],
  errors: [],
};

const UserReducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      nextState = Object.assign({}, state, {user: action.payload.user});
      return nextState;
    case RECEIVE_ERRORS:
      nextState = merge({}, state, {errors: action.payload.user.errors});
      return nextState;
    default:
      return state;
  }
};

export default UserReducer;

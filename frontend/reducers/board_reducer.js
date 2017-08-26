import {
  RECEIVE_ALL_USER_BOARDS,
  RECEIVE_A_BOARD,
  CLEAR_ERRORS,
  RECEIVE_ERRORS } from '../actions/board_actions';
import { merge } from 'lodash';

const defaultState = {
  userBoards: {},
  board: {},
  errors: [],
};

const BoardReducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_USER_BOARDS:
      nextState = merge({}, defaultState, {userBoards: action.userBoards});
      return nextState;
    case RECEIVE_A_BOARD:
      nextState = merge({}, defaultState, {board: action.board});
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

export default BoardReducer;

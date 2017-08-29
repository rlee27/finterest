import {
  RECEIVE_ALL_USER_BOARDS,
  RECEIVE_A_BOARD,
  CLEAR_ERRORS,
  RECEIVE_ERRORS,
  DELETE_BOARD } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge, values, omit } from 'lodash';

const defaultState = {
  userBoards: {},
  board: {},
  errors: [],
};

const BoardReducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      const userBoards = action.payload.boards.reduce((result, board) => {
        result[board.id] = board;
        return result;
      }, {});
      nextState = merge({}, state, {userBoards});
      return nextState;

    case RECEIVE_ALL_USER_BOARDS:
      nextState = merge({}, state, {userBoards: action.userBoards});
      return nextState;

    case RECEIVE_A_BOARD:
      const addedBoardState = merge(
        {}, state, {userBoards: {[action.board.id]: action.board}});
      nextState = merge({}, addedBoardState, {board: action.board});
      return nextState;

    case RECEIVE_ERRORS:
      nextState = merge({}, state, {errors: action.errors});
      return nextState;

    case CLEAR_ERRORS:
      nextState = Object.assign({}, state, {errors: []});
      return nextState;

    case DELETE_BOARD:
      const withoutBoard = omit(state.userBoards, [action.board.id]);
      nextState = merge({}, {userBoards: withoutBoard});
      return nextState;

    default:
      return state;
  }
};

export default BoardReducer;

import { RECEIVE_ALL_USER_BOARDS, RECEIVE_A_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const defaultState = {
  board: {},
};

const BoardReducer = (state = defaultState, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_USER_BOARDS:
      nextState = merge({}, action.boards);
      return nextState;
    case RECEIVE_A_BOARD:
      nextState = merge({}, state, {board: action.board});
      return nextState;
    default:
      return state;
  }
};

export default BoardReducer;

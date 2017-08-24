import { RECEIVE_ALL_USER_BOARDS, RECEIVE_A_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const BoardReducer = (state = {}, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_USER_BOARDS:
      nextState = merge({}, action.boards);
      return nextState;
    case RECEIVE_A_BOARD:
      nextState = merge({}, action.board);
      return nextState;
    default:
      return state;
  }
};

export default BoardReducer;

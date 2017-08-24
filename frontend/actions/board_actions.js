import * as BoardAPIUtil from '../util/board_api_util';
export const RECEIVE_ALL_USER_BOARDS = "RECEIVE_ALL_USER_BOARDS";
export const RECEIVE_A_BOARD = "RECEIVE_A_BOARD";

export const receiveAllBoards = (boards) => {
  return({
    type: RECEIVE_ALL_USER_BOARDS,
    boards,
  });
};

export const receiveABoard = (board) => {
  return({
    type: RECEIVE_A_BOARD,
    board,
  });
};

export const getUserBoards = (userId) => {
  return (dispatch) => {
    return BoardAPIUtil.requestUserBoards(userId)
      .then((boards) => {
        return dispatch(receiveAllBoards(boards));
      });
  };
};

export const getABoard = (userId, boardId) => {
  return (dispatch) => {
    return BoardAPIUtil.requestABoard(userId, boardId)
      .then((board) => {
        return dispatch(receiveABoard(board));
      });
  };
};

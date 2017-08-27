import * as BoardAPIUtil from '../util/board_api_util';
export const RECEIVE_ALL_USER_BOARDS = "RECEIVE_ALL_USER_BOARDS";
export const RECEIVE_A_BOARD = "RECEIVE_A_BOARD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllBoards = (userBoards) => {
  return({
    type: RECEIVE_ALL_USER_BOARDS,
    userBoards,
  });
};

export const receiveABoard = (board) => {
  return({
    type: RECEIVE_A_BOARD,
    board,
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors,
  });
};


export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
    errors: [],
  });
};

export const getUserBoards = (userId) => {
  return (dispatch) => {
    return BoardAPIUtil.requestUserBoards(userId)
      .then((userBoards) => {
        return dispatch(receiveAllBoards(userBoards));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const getABoard = (userId, boardTitle) => {
  return (dispatch) => {
    return BoardAPIUtil.requestABoard(userId, boardTitle)
      .then((board) => {
        return dispatch(receiveABoard(board));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const createBoard = (userId, board) => {
  return (dispatch) => {
    return BoardAPIUtil.createBoard(userId, board)
      .then((board) => {
        return dispatch(receiveABoard(board));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const editBoard = (userId, boardId, board) => {
  return (dispatch) => {
    return BoardAPIUtil.editBoard(userId, boardId, board)
      .then((board) => {
        return dispatch(receiveABoard(board));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

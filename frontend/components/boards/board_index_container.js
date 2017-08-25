import React from 'react';
import { connect } from 'react-redux';
import BoardIndex from './board_index';

const mapStateToProps = (state) => {
  const currentUserId = state.session.currentUser.id;
  const board = state.entities.boards.board;
  return ({
    board,
    currentUserId,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createBoard: (currentUserId, board) => {
      return dispatch(createBoard(currentUserId, board));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);

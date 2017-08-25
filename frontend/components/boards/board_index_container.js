import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardIndex from './board_index';

const mapStateToProps = (state, ownProps) => {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardIndex));

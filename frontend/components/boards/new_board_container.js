import React from 'react';
import { connect } from 'react-redux';
import NewBoardForm from './new_board_form';
import { createBoard } from '../../actions/board_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const board = state.entities.boards.board;
  return ({
    board,
    currentUserId,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createBoard: (currentUserId, board) => {
      return dispatch(createBoard(currentUserId, board));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoardForm));

import React from 'react';
import { connect } from 'react-redux';
import NewBoardForm from './new_board_form';
import { createBoard } from '../../actions/board_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(NewBoardForm);

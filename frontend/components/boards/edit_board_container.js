import React from 'react';
import { connect } from 'react-redux';
import { editBoard, clearErrors, destroyBoard } from '../../actions/board_actions';
import EditBoardForm from './edit_board_form';

const mapStateToProps = (state) => {
  return ({
    board: state.entities.boards.board,
    userId: state.session.currentUser.id,
    errors: state.entities.boards.errors,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    editBoard: (userId, boardId, board) => {
      return dispatch(editBoard(userId, boardId, board));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    destroyBoard: (userId, boardId) => {
      return dispatch(destroyBoard(userId, boardId));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);

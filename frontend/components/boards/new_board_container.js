import React from 'react';
import { connect } from 'react-redux';
import NewBoardForm from './new_board_form';
import { createBoard, clearErrors } from '../../actions/board_actions';
import { getTopics } from '../../actions/topic_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const board = state.entities.boards.board;
  const errors = state.entities.boards.errors;
  return ({
    board,
    currentUserId,
    errors,
    topics: state.entities.topics.topics,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createBoard: (currentUserId, board) => {
      return dispatch(createBoard(currentUserId, board));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    getTopics: () => {
      return dispatch(getTopics());
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoardForm));

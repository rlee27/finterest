import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardDetailItem from './board_detail_item';
import { selectBoard } from '../../reducers/selectors';
import { getABoard, getUserBoards, destroyBoard } from '../../actions/board_actions';

const mapStateToProps= ({ entities: { boards } } , { match: { params } }) => {
  const board = boards.board;
  const userId = params.userId;
  const boardTitle = params.boardTitle;
  const userBoards = boards.userBoards;
  return ({
    board,
    userBoards,
    userId,
    boardTitle
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getUserBoards: (userId) => {
      return dispatch(getUserBoards(userId));
    },
    getABoard: (userId, boardTitle) => {
      return dispatch(getABoard(userId, boardTitle));
    },
    destroyBoard: (userId, boardId) => {
      return dispatch(destroyBoard(userId, boardId));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardDetailItem));

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardDetailItem from './board_detail_item';
import { selectBoard } from '../../reducers/selectors';
import { requestUserBoards } from '../../util/board_api_util';

const mapStateToProps= (state, { match }) => {
  const board = state.entities.boards.board;
  const userId = match.params.userId;
  return ({
    board,
    userId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getUserBoards: (userId) => {
      return dispatch(requestUserBoards(userId));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardDetailItem));

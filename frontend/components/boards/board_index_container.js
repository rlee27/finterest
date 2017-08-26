import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { getUserBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const userBoards = values(state.entities.boards.userBoards);
  const userId = ownProps.match.params.userId;
  return ({
    userBoards,
    currentUserId,
    userId,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getUserBoards: (userId) => {
      return dispatch(getUserBoards(userId));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardIndex));

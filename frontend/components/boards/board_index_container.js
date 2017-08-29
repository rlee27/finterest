import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { values } from 'lodash';
import { getUserBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { selectUserBoards } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const userId = ownProps.match.params.userId;
  const user = state.entities.users.user;
  return ({
    userBoards: selectUserBoards(state, user),
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

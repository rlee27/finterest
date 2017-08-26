import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './user';
import { getUser } from '../../actions/user_actions';
import { getUserBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users.user;
  const boards = state.entities.boards.userBoards;
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    boards,
    userId,
    user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    getUser: (userId) => {
      return dispatch(getUser(userId));
    },
    getUserBoards: (userId) => {
      return dispatch(getUserBoards(userId));
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

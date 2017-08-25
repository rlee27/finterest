import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import { getUser } from '../../actions/user_actions';
import { getUserBoards } from '../../actions/board_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users.user;
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
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

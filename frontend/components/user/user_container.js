import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import { receiveUser } from '../../actions/user_actions';
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
    receiveUser: (user) => {
      return dispatch(receiveUser(user));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

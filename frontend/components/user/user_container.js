import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const refresh = ownProps.history.go(1);
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    refresh,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    logout: () => {
      return dispatch(logout());
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Homepage from './homepage';
import { logout, receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return ({
    currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    receiveCurrentUser: (user) => {
      return dispatch(receiveCurrentUser(user));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));

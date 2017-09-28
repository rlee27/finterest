import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserDetail from './user_detail';
import { receiveUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users.user;
  return ({
    user,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveUser: (userId) => {
      return dispatch(receiveUser(userId));
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));

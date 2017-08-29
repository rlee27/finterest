import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserDetail from './user_detail';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users.user;
  return ({
    user,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetail));

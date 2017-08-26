import React from 'react';
import { connect } from 'react-redux';
import UserDetail from './user_detail';

const mapStateToProps = (state) => {
  const userName = state.entities.users.user.name;
  return ({
    userName,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './sign_up';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    signup: (user) => {
      return dispatch(signup(user));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

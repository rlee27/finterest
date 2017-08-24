import React from 'react';
import { connect } from 'react-redux';
import { signup, submit } from '../../actions/session_actions';
import SignUp from './sign_up';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    signup: (user) => {
      return dispatch(signup(user));
    },
    submit: (user) => {
      return dispatch(submit(user));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

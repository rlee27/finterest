import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './session_form';

const mapStateToProps = (state) => {
  return({
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

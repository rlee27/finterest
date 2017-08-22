import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname.slice(1) === 'login' ? 'login' : 'signup';
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1) === 'login' ? login : signup;
  return ({
    processForm: (user) => {
      return dispatch(formType(user));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));

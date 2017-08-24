import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser),
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (user) => {
      return dispatch(login(user));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
// errors are occurring when user refreshes and signs out.. theres not re-render

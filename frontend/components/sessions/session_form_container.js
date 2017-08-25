import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    loggedIn: Boolean(state.session.currentUser),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => {
      return dispatch(login(user));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

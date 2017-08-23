import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.session.errors,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (user) => {
      return dispatch(login(user));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

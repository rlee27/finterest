import React from 'react';
import { connect } from 'react-redux';
import SavePin from './save_pin';
import { clearErrors, savePin } from '../../actions/pin_actions';
import { getUser } from '../../actions/user_actions';
import { selectUserBoards } from '../../reducers/selectors';

const mapStateToProps = (state, props) => {
  const currentUser = state.session.currentUser;
  return ({
    pin: props.pin,
    currentUser: currentUser,
    currentUserBoards: selectUserBoards(state, currentUser),
    errors: state.entities.pins.errors,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    savePin: (pin) => {
      return dispatch(savePin(pin));
    },
    getUser: (userId) => {
      return dispatch(getUser(userId));
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SavePin);

import React from 'react';
import { connect } from 'react-redux';
import NewPin from './new_pin.jsx';
import { createPin, clearErrors } from '../../actions/pin_actions';
import { getUserBoards } from '../../actions/board_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    pin: state.entities.pins.pin,
    userBoards: state.entities.boards.userBoards,
    errors: state.entities.pins.errors,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createPin: (userId, formData) => {
      return dispatch(createPin(userId, formData));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    getUserBoards: (userId) => {
      return dispatch(getUserBoards(userId));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPin);

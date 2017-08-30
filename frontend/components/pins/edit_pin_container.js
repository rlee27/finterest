import React from 'react';
import { connect } from 'react-redux';
import EditPinForm from './edit_pin_form';
import { editPin, clearErrors, destroyPin } from '../../actions/pin_actions';

const mapStateToProps = (state, props) => {
  const pin = props.pin || state.entities.pins.pin;
  return ({
    pin,
    currentUser: state.session.currentUser,
    userBoards: state.entities.boards.userBoards,
    board_id: pin.board_id,
    errors: state.entities.boards.errors,
    topics: state.entities.topics.topics,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    editPin: (pinId, pin) => {
      return dispatch(editPin(pinId, pin));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    destroyPin: (pinId) => {
      return dispatch(destroyPin(pinId));
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);

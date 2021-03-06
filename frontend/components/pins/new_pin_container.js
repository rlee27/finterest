import React from 'react';
import { connect } from 'react-redux';
import NewPin from './new_pin.jsx';
import NewPinMulti from './new_pin_multi';
import { createPin, clearErrors, receiveErrors } from '../../actions/pin_actions';
import { getUserBoards } from '../../actions/board_actions';
import { getTopics } from '../../actions/topic_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    pin: state.entities.pins.pin,
    userBoards: state.entities.boards.userBoards,
    errors: state.entities.pins.errors,
    topics: state.entities.topics.topics,
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
    },
    getTopics: () => {
      return dispatch(getTopics());
    },
    receiveErrors: (errors) => {
      return dispatch(receiveErrors(errors));
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPinMulti);

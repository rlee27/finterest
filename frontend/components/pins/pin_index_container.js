import React from 'react';
import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { createPin } from '../../actions/pin_actions';
import { selectUserBoards } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    userPins: state.entities.pins.userPins,
    currentUser: state.session.currentUser,
    user: state.entities.users.user,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createPin: (pin) => {
      return dispatch(createPin(pin));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);

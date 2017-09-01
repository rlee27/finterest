import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinDetailItem from './pin_detail_item';
import { getPin, clearErrors, receivePin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    pinId: ownProps.match.params.pinId,
    pin: state.entities.pins.pin,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getPin: (pinId) => {
      return dispatch(getPin(pinId));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    },
    receivePin: (pin) => {
      return dispatch(receivePin(pin));
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetailItem));

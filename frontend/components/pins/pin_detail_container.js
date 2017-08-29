import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinDetailItem from './pin_detail_item';
import { getPin } from '../../actions/pin_actions';

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
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetailItem));

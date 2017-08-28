import React from 'react';
import { connect } from 'react-redux';
import PinIndex from './pin_index';

const mapStateToProps = (state) => {
  return ({
    userPins: state.entities.pins.userPins,
    currentUser: state.session.currentUser,
    user: state.entities.users.user,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);

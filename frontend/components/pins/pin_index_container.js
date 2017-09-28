import React from 'react';
import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { createPin } from '../../actions/pin_actions';
import { selectUserPins } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  const user = state.entities.users.user;
  return ({
    userPins: selectUserPins(state, user),
    currentUser: state.session.currentUser,
    user,
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

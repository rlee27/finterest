import * as PinAPIUtil from '../util/pin_api_util';
export const RECEIVE_USER_PINS = "RECEIVE_USER_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const DELETE_PIN = "DELETE_PIN";

export const receiveUserPins = (userPins) => {
  return ({
    type: RECEIVE_USER_PINS,
    userPins,
  });
};

export const receivePin = (pin) => {
  return ({
    type: RECEIVE_PIN,
    pin,
  });
};

export const deletePin = (pin) => {
  return ({
    type: DELETE_PIN,
    pin,
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors,
  });
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
    errrors: [],
  });
};

export const getUserPins = (userId) => {
  return (dispatch) => {
    return PinAPIUtil.getUserPins(userId)
      .then((userPins) => {
        return dispatch(receiveUserPins(userPins));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const getPin = (pinId) => {
  return (dispatch) => {
    return PinAPIUtil.getPin(pinId)
      .then((pin) => {
        return dispatch(receivePin(pin));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const createPin = (userId, formData) => {
  return (dispatch) => {
    return PinAPIUtil.createPin(userId, formData)
      .then((pin) => {
        return dispatch(receivePin(pin));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const editPin = (pinId, pin) => {
  return (dispatch) => {
    return PinAPIUtil.editPin(pinId, pin)
      .then((pin) => {
        return dispatch(receivePin(pin));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const destroyPin = (pinId) => {
  return (dispatch) => {
    return PinAPIUtil.destroyPin(pinId)
      .then((pin) => {
        return dispatch(deletePin(pin));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

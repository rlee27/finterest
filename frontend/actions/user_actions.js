import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (payload) => {
  return ({
    type: RECEIVE_USER,
    payload,
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors,
  });
};

export const getUser = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.requestUser(userId)
      .then((user) => {
        return dispatch(receiveUser(user));
      },
      (errors) => {
        return dispatch(receiveErrors(errors));
      });
  };
};

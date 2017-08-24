import * as APIUtil from '../util/user_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
  return ({
    type: RECEIVE_USER,
    user,
  });
};

export const requestAUser = (username) => {
  return (dispatch) => {
    return APIUtil.fetchAUser(username)
    .then((user) => {
      dispatch(receiveUser(user));
    });
  };
};

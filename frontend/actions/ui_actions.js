export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const LOGIN_MODAL = 'LOGIN_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';

export const receiveModal = () => {
  return {
    type: SHOW_MODAL
  };
};


export const loginModal = () => {
  return {
    type: LOGIN_MODAL
  };
};

export const signupModal = () => {
  return {
    type: SIGNUP_MODAL
  };
};

export const removeModal = () => {
  return {
    type: HIDE_MODAL
  };
};

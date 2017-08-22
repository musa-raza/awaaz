export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const receiveModal = () => {
  return {
    type: SHOW_MODAL
  };
};


export const removeModal = () => {
  return {
    type: HIDE_MODAL
  };
};

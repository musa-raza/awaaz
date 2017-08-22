import { SHOW_MODAL, HIDE_MODAL } from '../actions/ui_actions';


const initialState = {
  modalOpen: false
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SHOW_MODAL:
      return({
        modalOpen: true
      });
    case HIDE_MODAL:
      return({
        modalOpen: false
      });
    default:
      return state;
  }
};


export default uiReducer;

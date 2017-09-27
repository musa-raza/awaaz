import * as APIUtil from '../util/like_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_UNLIKE = 'RECEIVE_UNLIKE';

export const receiveLike = (like) => {
  return({
    type: RECEIVE_LIKE,
    like,
  });
};

export const receiveAnUnlike = (like) => {
  return({
    type: RECEIVE_UNLIKE,
    like,
  });
};


export const createLike = (like) => {
  return (dispatch) => {
    return APIUtil.createALike(like)
    .then((like) => dispatch(receiveLike(like)));
  };
};

export const deleteLike = (like) => {
  return (dispatch) => {
    return APIUtil.deleteALike(like)
    .then((like) => dispatch(receiveAnUnlike(like)));
  };
};

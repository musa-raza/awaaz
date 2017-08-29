import * as APIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_A_COMMENT = 'RECEIVE_A_COMMENT';
export const REMOVE_A_COMMENT = 'REMOVE_A_COMMENT';

export const receiveAllComments = (comments) => {
  return ({
    type: RECEIVE_COMMENTS,
    comments,
  });
};

export const receiveAComment = (comment) => {
  return ({
    type: RECEIVE_A_COMMENT,
    comment,
  });
};

export const removeAComment = (comment) => {
  return({
    type: REMOVE_A_COMMENT,
    comment
  });
};


export const createComment = (comment) => {
  return (dispatch) => {
    return APIUtil.createAComment(comment)
    .then((comment) => dispatch(receiveAComment(comment)));
  };
};

export const deleteComment = (comment) => {
  return (dispatch) => {
    return APIUtil.deleteAComment(comment)
    .then((comment) => dispatch(removeAComment(comment)));
  };
};

export const requestAllComments = () => {
  return (dispatch) => {
    return APIUtil.fetchAllComments()
    .then((comments) => dispatch(receiveAllComments(comments)));
  };
};

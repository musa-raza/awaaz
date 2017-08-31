export const createAComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  });
};

export const deleteAComment = (commentiD) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentiD}`
  });
};

export const fetchAllComments = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments'
  });
};

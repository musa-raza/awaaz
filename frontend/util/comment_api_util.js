export const createAComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment }
  });
};

export const deleteAComment = (comment) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`
  });
};

export const fetchAllComments = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments'
  });
};

export const createALike = (like) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  });
};

export const deleteALike = (songId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${songId}`
  });
};

export const fetchAllSongs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs'
  });
};

export const fetchASong = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  });
};

export const deleteASong = (song) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${song.id}`
  });
};

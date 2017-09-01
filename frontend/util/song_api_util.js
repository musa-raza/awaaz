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

export const deleteASong = (songId) => {
    return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${songId}`
  });
};

export const createASong = (formData) => {
  return $.ajax({
    url: '/api/songs',
    type: 'POST',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const editASong = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/songs/${id}`,
    processData: false,
    contentType: false,
    data: formData
  });
};

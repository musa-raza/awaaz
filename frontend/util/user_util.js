export const fetchAUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${username}`
  });
};

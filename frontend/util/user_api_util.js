export const requestUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  });
};

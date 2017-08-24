export const getUserBoards = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/boards`,
    method: 'GET',
  });
};

export const requestUserBoards = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/boards`,
    method: 'GET',
  });
};

export const requestABoard = (userId, boardId) => {
  return $.ajax({
    url: `api/users/${userId}/boards/${boardId}`,
    method: 'GET'
  });
};

export const requestUserBoards = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/boards`,
    method: 'GET',
  });
};

export const requestABoard = (userId, boardTitle) => {
  return $.ajax({
    url: `api/users/${userId}/boards/${boardTitle}`,
    method: 'GET'
  });
};

export const createBoard = (userId, board) => {
  return $.ajax({
    url: `api/users/${userId}/boards`,
    method: 'POST',
    data: { board }
  });
};

export const editBoard = (userId, boardId, board) => {
  return $.ajax({
    url: `api/users/${userId}/boards/${boardId}`,
    method: 'PATCH',
    data: { board }
  });
};

export const destroyBoard = (userId, boardId) => {
  return $.ajax({
    url: `api/users/${userId}/boards/${boardId}`,
    method: 'DELETE',
  });
};

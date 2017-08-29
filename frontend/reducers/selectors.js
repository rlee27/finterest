import { values } from 'lodash';

export const selectUserName = ({ currentUser }) => {
  let name;
  if (currentUser) {
    name = currentUser.name;
  } else {
    name = "";
  }
  return name;
};

export const selectUserBoards = (state, user) => {
  return user.board_ids ? user.board_ids.map(id => state.entities.boards.userBoards[id]) : []
};

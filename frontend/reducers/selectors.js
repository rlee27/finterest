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

export const selectUserBoards = (state) => {
  if (state.entities.boards.userBoards) {
    return values(state.entities.boards.userBoards);
  } else {
    return []
  }
};

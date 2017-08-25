export const selectUserName = ({ currentUser }) => {
  let name;
  if (currentUser) {
    name = currentUser.name;
  } else {
    name = "";
  }
  return name;
};

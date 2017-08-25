import { combineReducers } from 'redux';

import boards from './board_reducer';
import users from './user_reducer';

export default combineReducers({
  boards,
  users,
});

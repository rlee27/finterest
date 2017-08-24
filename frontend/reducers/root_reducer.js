import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
});

export default rootReducer;

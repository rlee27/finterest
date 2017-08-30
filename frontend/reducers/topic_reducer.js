import { RECEIVE_TOPICS } from '../actions/topic_actions';
import { merge } from 'lodash';

const TopicReducer = (state = {}, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_TOPICS:
      nextState = merge({}, state, {topics: action.topics});
      return nextState;

    default:
      return state;
  }
};

export default TopicReducer;

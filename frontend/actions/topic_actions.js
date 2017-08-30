import * as TopicAPIUtil from '../util/topic_api_util';
export const RECEIVE_TOPICS = "RECEIVE_TOPICS";

export const receiveTopics = (topics) => {
  return({
    type: RECEIVE_TOPICS,
    topics,
  });
};

export const getTopics = () => {
  return (dispatch) => {
    return TopicAPIUtil.getTopics()
      .then((topics) => {
        return dispatch(receiveTopics(topics));
      });
  };
};

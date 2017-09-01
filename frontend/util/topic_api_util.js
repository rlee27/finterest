export const getTopics = () => {
  return $.ajax({
    url: '/api/topics',
    method: 'GET',
  });
};

export const followTopics = (userId, followedTopicIds) => {
  return $.ajax({
    url: `/api/users/${userId}/follows`,
    method: 'POST',
    data: { topic_ids: followedTopicIds }
  });
};

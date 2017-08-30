export const getTopics = () => {
  return $.ajax({
    url: '/api/topics',
    method: 'GET',
  });
};

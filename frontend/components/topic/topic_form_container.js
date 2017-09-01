import React from 'react';
import { connect } from 'react-redux';
import { sendFollowTopics } from '../../actions/session_actions';
import TopicForm from './topic_form';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    topics: state.entities.topics.topics,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    sendFollowTopics: (userId, topicIds) => {
      return dispatch(sendFollowTopics(userId, topicIds));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);

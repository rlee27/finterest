import React from 'react';
import { connect } from 'react-redux';
import TopicForm from './topic_form';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    topics: state.entities.topics.topcs,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Homepage from './homepage';
import { logout, receiveCurrentUser } from '../../actions/session_actions';
import { getTopics } from '../../actions/topic_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return ({
    currentUser,
    topics: state.entities.topics.topics,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    receiveCurrentUser: (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    getTopics: () => {
      return dispatch(getTopics());
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));

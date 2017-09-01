import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Homepage from './homepage';
import { getUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { getTopics } from '../../actions/topic_actions';
import { getHomePins } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return ({
    currentUser,
    topics: state.entities.topics.topics,
    homePins: state.entities.pins.homePins,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getUser: (user) => {
      return dispatch(getUser(user));
    },
    getTopics: () => {
      return dispatch(getTopics());
    },
    getHomePins: (userId) => {
      return dispatch(getHomePins(userId));
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));

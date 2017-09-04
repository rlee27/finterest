import React from 'react';
import TopicFormContainer from '../topic/topic_form_container';
import PinIndex from '../pins/pin_index';
import { values } from 'lodash';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getUser(this.props.currentUser.id)
        .then(() => this.props.getHomePins(this.props.currentUser.id));
    }
    if (!this.props.topics) {
      return this.props.getTopics();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser.follow_ids && this.props.currentUser.id) {
      this.props.getHomePins(this.props.currentUser.id);
    }
  }

  renderTopicPicker() {
    if (this.props.currentUser.follow_ids &&
      this.props.currentUser.follow_ids.length < 5) {
        return <TopicFormContainer />;
    } else {
      return null;
    }
  }

  render(){
    if (this.props.homePins && this.props.currentUser.follow_ids.length) {
      return(
        <div>
          {this.renderTopicPicker()}
          <PinIndex userPins={this.props.homePins.pins}
            currentUser={this.props.currentUser} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Homepage;

import React from 'react';
import TopicFormContainer from '../topic/topic_form_container';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.getUser(this.props.currentUser.id);
    }
    if (!this.props.topics) {
      return this.props.getTopics();
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
    if (this.props.currentUser) {
      return(
        <div>
          <h2>
            Hi, {this.props.currentUser.name}, the rest of the site is still
            under construction...
          </h2>
          {this.renderTopicPicker()}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Homepage;

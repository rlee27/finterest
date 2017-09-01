import React from 'react';
import Modal from 'react-modal';
import topicFormStyle from './topic_form_style';
import { values, includes } from 'lodash';

class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.selectedTopics = [];

    this.state = {
      topics: 0,
      modalOpen: true,
      disabledSubmit: true,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.setState({topics: 0, modalOpen: false});
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  topicOptions() {
    return values(this.props.topics).map((topic) => {
      return(
        <label className="topic-label" key={topic.id}>
          <div>
            {topic.name}
          </div>
          <input type="checkbox"
            value={topic.id}
            name={topic.name}
            onClick={this.handleChange} />
        </label>
      );
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    return this.props.sendFollowTopics(this.props.currentUser.id,
                                       this.selectedTopics)
      .then(() => {
        return this.closeModal();
      });
  }

  handleChange(e) {
    if (this.selectedTopics.includes(parseInt(e.target.value))) {
      this.selectedTopics.filter((el) => el !== parseInt(e.target.value));
    } else {
      this.selectedTopics.push(parseInt(e.target.value));
    }
    if (this.selectedTopics.length >= 5) {
      this.setState({topics: this.selectedTopics.length, disabledSubmit: false});
    } else {
      this.setState({topics: this.selectedTopics.length});
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={topicFormStyle}
        contentLabel='sans-serif'>
        <form onSubmit={this.handleSubmit}
          className="topic-form">
          <h3>
            Please select at least 5 topics.
          </h3>
          <hr className="line-break" />
          <div className="topic-list">
            {this.topicOptions()}
          </div>
          <hr className="line-break" />
          <button onClick={this.handleSubmit}
            disabled={this.state.disabledSubmit}
            className="topic-submit">
            Submit
          </button>
        </form>
      </Modal>
    );
  }
}

export default TopicForm;

// for render
// <div className={`topic-selector ${checked}`}
//   onClick={this.handleChange}>
//     <label htmlFor={topic.id}>
//     <input type="checkbox"
//       key={topic.id}
//       value={topic.id}
//       name={topic.name} />
//       {topic.name}
//     </label>
// </div>

// in handleChange
// this.setState({topics: this.state.topics.push(e.target.htmlFor)});
// this.setState({topics: this.state.topics.push(e.target.htmlFor)});
// this.setState({[parseInt(e.target.htmlFor)]: e.target.htmlFor});
// this.toggleChecked(e.target.htmlFor);

// toggleChecked(topicId) {
//   return includes(this.state.topics, topicId) ? 'checked' : null;
// }
// get back to this regarding custom checkboxes and toggle check handling

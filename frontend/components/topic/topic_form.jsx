import React from 'react';
import Modal from 'react-modal';
import newBoardStyle from '../boards/new_board_style';
import { values } from 'lodash';

class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: {},
      modalOpen: true,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <label>
          {topic.name}
          <input type="checkbox"
            key={topic.id}
            value={topic.id}
            name={topic.name} />
        </label>
      );
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({topics: e.target.checked});
  }

  minimumTopics() {
    return Boolean(values(this.state).length >= 5);
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={newBoardStyle}
        contentLabel='sans-serif'>
        <form onSubmit={this.handleSubmit}>
          <h3>
            Please select at least 5 topics.
          </h3>
          {this.topicOptions()}
          <button onClick={this.handleSubmit}
            disabled={this.minimumTopics}>
            Submit
          </button>
        </form>
      </Modal>
    );
  }
}

export default TopicForm;

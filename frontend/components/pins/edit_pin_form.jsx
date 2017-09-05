import React from 'react';
import Modal from 'react-modal';
import { values, merge } from 'lodash';
import newBoardStyle from '../boards/new_board_style';


class EditPinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_url: this.props.pin.pin_url,
      author_id: this.props.currentUser.id,
      board_id: this.props.board_id,
      description: this.props.pin.description,
      topic_id: this.props.pin.topic_id,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteAndRedirect = this.deleteAndRedirect.bind(this);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`}>{error}</li>;
        })}
      </ul>
    );
  }

  closeModal() {
    this.setState({ modalOpen: false });
    return this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalOpen: true });
    return this.props.clearErrors();
  }

  topicOptions() {
    return values(this.props.topics).map((topic) => {
      return(
        <option key={topic.id} value={topic.id}>{topic.name}</option>
      );
    });
  }

  boardOptions() {
    return values(this.props.userBoards).map((board) => {
      return(
        <option key={board.id} value={board.id}>{board.title}</option>
      );
    });
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { pin_url,
      author_id,
      board_id,
      description,
      topic_id } = this.state;
    const pin =
      { pin_url,
        author_id,
        board_id,
        description,
        topic_id };
    this.props.editPin(this.props.pin.id, pin);
    this.closeModal();
  }

  // deleteAndRedirect() {
  //   const boardTitle = this.props.board.title.split(" ").join("-");
  //   this.closeModal();
  //   this.props.destroyPin(this.props.pin.id)
  //     .then((res) => {
  //       return this.props.history.push(`/${this.props.currentUser.id}/boards/${boardTitle}`);
  //     });
  // }
  // use this function or something similar for when user is on pin show, and deletes

  checkDefault() {
    if (!this.props.pin.topic_id) {
      return 0;
    } else {
      return this.props.pin.topic_id;
    }
  }

  checkAuthor() {
    if (this.props.currentUser.id == this.props.pin.author_id) {

    }
  }

  render() {
    if (this.props.currentUser.id == this.props.pin.author_id) {
      return(
        <div key={this.props.pin.id}>
          <button className="edit-board-button" onClick={this.openModal}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={newBoardStyle}
            contentLabel='sans-serif'>

            <form onSubmit={this.handleSubmit}>
              <h3 className="create-board-text">
                Edit this Pin
              </h3>
              {this.renderErrors()}
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="board">Pin to</label>
                <select onChange={this.update('board_id')}
                  defaultValue={this.props.board_id}
                  className="form-input-field topic-selector" >
                  <option disabled value="select board">Select Board</option>
                  {this.boardOptions()}
                </select>
              </div>
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="topic">Topic</label>
                <select onChange={this.update('topic_id')}
                  defaultValue={this.checkDefault()}
                  className="topic-selector form-input-field">
                  <option disabled value="0">Select Topic</option>
                  {this.topicOptions()}
                </select>
              </div>
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="description">Description</label>
                <textarea defaultValue={this.props.pin.description}
                  onChange={this.update('description')}
                  placeholder="What is your pin about?"
                  className="form-input-field">
                </textarea>
              </div>
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  defaultValue={this.props.pin.pin_url}
                  onChange={this.update('pin_url')}
                  placeholder="From what site?"
                  className="form-input-field" />
              </div>
            </form>
            <hr className="line-break" />
            <div className="board-form-buttons">
              <button className="basic-button"
                onClick={this.deleteAndRedirect}>
                Delete Pin
              </button>
              <button className="basic-button"
                onClick={this.closeModal}>
                Cancel
              </button>
              <button className="basic-button"
                onClick={this.handleSubmit}>
                Save
              </button>
            </div>
          </Modal>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default EditPinForm;

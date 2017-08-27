import React from 'react';
import Modal from 'react-modal';
import { merge } from 'lodash';
import newBoardStyle from './new_board_style';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      modalOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const { title, description } = this.state;
    const board = merge({}, this.props.board, {title, description});
    this.props.editBoard(this.props.userId, this.props.board.id, board);
    this.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render() {
    return(
      <div>
        <button className="create-board-button" onClick={this.openModal}>
          🖊
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={newBoardStyle}
          contentLabel='sans-serif'>

          <form onSubmit={this.handleSubmit}>
            <h3>Edit your Board</h3>
            <p>{this.props.board.title}</p>
            <br />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              defaultValue={this.props.board.title}
              onChange={this.update('title')}
              placeholder="Title" />
            <br />
            <label htmlFor="description">Description</label>
            <textarea defaultValue={this.props.board.description}
              onChange={this.update('description')}
              placeholder="What is your board about?">
            </textarea>
          </form>
          <br />
          {this.renderErrors()}
          <div className="board-form-buttons">
            <button className="basic-button" onClick={this.closeModal}>Cancel</button>
            <button className="basic-button" onClick={this.handleSubmit}>Save</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditBoardForm;

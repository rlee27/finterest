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
    this.deleteAndRedirect = this.deleteAndRedirect.bind(this);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`} className="error-message">{error}</li>;
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

  deleteAndRedirect() {
    this.closeModal();
    this.props.destroyBoard(this.props.userId, this.props.board.id)
      .then((res) => {
        return this.props.history.push(`/${this.props.userId}`);
      });
  }

  render() {
    return(
      <div>
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
              Edit:
            </h3>
            {this.renderErrors()}
            <br />
            <p className="board-title">{this.props.board.title}</p>
            <hr className="line-break" />
            <div className="form-content">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                defaultValue={this.props.board.title}
                onChange={this.update('title')}
                placeholder="Title"
                className="form-input-field" />
            </div>
            <hr className="line-break" />
            <div className="form-content">
              <label htmlFor="description">Description</label>
              <textarea defaultValue={this.props.board.description}
                onChange={this.update('description')}
                placeholder="What is your board about?"
                className="form-input-field">
              </textarea>
            </div>
          </form>
          <hr className="line-break" />
          <div className="board-form-buttons">
            <button className="basic-button"
              onClick={this.deleteAndRedirect}>
              Delete Board
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
  }
}

export default EditBoardForm;

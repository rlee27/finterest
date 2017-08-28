import React from 'react';
import { merge } from 'lodash';
import Modal from 'react-modal';
import newBoardStyle from './new_board_style';

class NewBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author_id: this.props.currentUserId,
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => {
            return <li key={`error-${i}`}>{error}</li>;
            })}
          </ul>
        );
    }
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
    const board = Object.assign({}, this.state);
    this.props.createBoard(this.props.author_id, board)
    .then(() => {
      const urlPath = this.state.title.split(" ").join("-");
      this.props.history.push(`/${this.state.author_id}/${urlPath}`);
    });
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
      <button onClick={this.openModal} className="new-board-button">
        <div className="board-card">
          <div className="add-board-box">
            <div className="plus">
              ✚
            </div>
          </div>
          <h3 className="create-board-text">
            Create Board
          </h3>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={newBoardStyle}
            contentLabel='sans-serif'>

            <form onSubmit={this.handleSubmit}>
              <h3>Create Board</h3>
              <div className="form-content">
                <label htmlFor="title">Title</label>
                <input
                  type="text" value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"
                  className="form-input-field"/>
              </div>
              {this.renderErrors()}
            </form>
            <br />
            <div className="board-form-buttons">
              <button className="basic-button" onClick={this.closeModal}>Cancel</button>
              <button className="basic-button" onClick={this.handleSubmit}>Create</button>
            </div>
          </Modal>
        </div>
      </button>
    );
  }
}

export default NewBoardForm;

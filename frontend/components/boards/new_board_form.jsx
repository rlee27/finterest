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
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  componentDidMount() {
    return this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.board.title && this.props !== nextProps) {
      const urlPath = nextProps.board.title.split(" ").join("-");
      this.props.history.push(`${this.state.author_id}/${urlPath}`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.createBoard(this.props.author_id, board);
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
          Create Board 🗓
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={newBoardStyle}>

          <form onSubmit={this.handleSubmit}>
            <h3>Create Board</h3>
            <br />
            {this.renderErrors()}
            <label htmlFor="title">Title</label>
            <input
              type="text" value={this.state.title}
              onChange={this.update('title')} />
            <br />
            <div className="board-form-buttons">
              <button className="basic-button" onClick={this.closeModal}>Cancel</button>
              <button className="basic-button">Create</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewBoardForm;

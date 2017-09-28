import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import newBoardStyle from '../boards/new_board_style';


class SavePin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_id: this.props.pin.id,
      board_id: "",
      user_id: this.props.currentUser.id,
      pin_description: this.props.pin.description
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (!this.props.userBoards.includes(this.props.currentUser.board_id[0])) {
    //   return this.props.getUser(this.props.currentUser.id);
    // }

  }

  closeModal() {
    this.setState({ modalOpen: false });
    return this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalOpen: true });
    return this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
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
    } else {
      return null;
    }
  }

  boardOptions() {
    return values(this.props.currentUserBoards).map((board) => {
      return(
        <option key={board.id} value={board.id}>{board.title}</option>
      );
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { pin_id, board_id, user_id, pin_description } = this.state;
    const pin = { pin_id, board_id, user_id, pin_description };
    this.props.savePin(pin);
    this.closeModal();
  }

  render() {
    if (this.props.currentUserBoards[0]) {
      return (
        <div>
          <button className="save-pin-button" onClick={this.openModal}>
            <i className="fa fa-thumb-tack" aria-hidden="true" />
            <p>Save</p>
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={newBoardStyle}
            contentLabel='sans-serif'>

            <form onSubmit={this.handleSubmit}>
              <h3 className="create-board-text">
                Save this Pin
              </h3>
              {this.renderErrors()}
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="board">Pin to</label>
                <select onChange={this.update('board_id')}
                  defaultValue="select board"
                  className="form-input-field topic-selector" >
                  <option disabled value="select board">Select Board</option>
                  {this.boardOptions()}
                </select>
              </div>
              <hr className="line-break" />
              <div className="form-content">
                <label htmlFor="description">Description</label>
                <textarea defaultValue={this.props.pin.description}
                  onChange={this.update('description')}
                  placeholder="What is the pin about?"
                  className="form-input-field">
                </textarea>
              </div>
            </form>
            <hr className="line-break" />
            <div className="board-form-buttons">
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
      return null;
    }
  }
}

export default SavePin;

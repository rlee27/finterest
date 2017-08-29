import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import newBoardStyle from '../boards/new_board_style';

class NewPin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_url: "",
      author: this.props.currentUser.id,
      board: null,
      description: "",
      imageFile: null,
      imageUrl: null,
      topic: {},
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.getUserBoards(this.props.currentUser.id);
  }

  boardOptions() {
    return values(this.props.userBoards).map((board) => {
      return(
        <option key={board.id} value={board.id}>{board.title}</option>
      );
    });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    return this.props.clearErrors();
  }

  openModal() {
    this.setState({ modalOpen: true });
    return this.props.clearErrors();
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

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pin[description]", this.state.description);
    formData.append("pin[author_id]", this.state.author);
    formData.append("pin[board_id]", parseInt(this.state.board));
    formData.append("pin[image]", this.state.imageFile);
    formData.append("pin[pin_url]", "www.google.com");

    this.props.createPin(this.props.currentUser.id, formData)
      .then((res) => {
        this.closeModal();
      });
  }

  render() {
    return(
      <button onClick={this.openModal}>
        Create Pin
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={newBoardStyle}
          contentLabel='sans-serif'>
          <form onSubmit={this.handleSubmit}>
            <p>Create Pin</p>
            <br />
            <label htmlFor="description">Description
            <input
              type="text" value={this.state.description}
              onChange={this.update('description')}
              placeholder='Description'/>
            </label>
            <br />
            <label htmlFor="board">Pick board to save to
              <select onChange={this.update('board')}
                defaultValue="select board">
                <option disabled value="select board">Select Board</option>
                {this.boardOptions()}
              </select>
            </label>
            <br />
            <label htmlFor="file"> Upload Image
              <input type="file" onChange={this.updateFile}/>
            </label>
          </form>
          <div>
            <button onClick={this.closeModal}>Cancel</button>
            <button onClick={this.handleSubmit}>Create</button>
          </div>
        </Modal>
      </button>
    );
  }
}

export default NewPin;

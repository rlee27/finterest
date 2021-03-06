import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import newBoardStyle from '../boards/new_board_style';

class NewPin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_url: "",
      author_id: this.props.currentUser.id,
      board: null,
      description: "",
      imageFile: null,
      imageUrl: null,
      topic_id: "",
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.getUserBoards(this.props.currentUser.id);
    if (!this.props.topics) {
      this.props.getTopics();
    }
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
            return <li key={`error-${i}`} className="error-message">{error}</li>;
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
    formData.append("pin[author_id]", this.state.author_id);
    formData.append("pin[board_id]", parseInt(this.state.board));
    formData.append("pin[topic_id]", this.state.topic_id);
    formData.append("pin[image]", this.state.imageFile);
    formData.append("pin[pin_url]", "");

    if (this.state.imageFile === null) {
      this.props.receiveErrors(["Must upload an image"]);
    } else {
      this.props.createPin(this.props.currentUser.id, formData)
      .then((res) => {
        this.closeModal();
      });
    }
  }

  render() {
    return(
      <div className="pin-card">
        <button onClick={this.openModal}>
          <div className="board-card">
            <div className="add-board-box">
              <div className="plus">
                ✚
              </div>
            </div>
            <h3 className="create-board-text">
              Create Pin
            </h3>
          </div>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={newBoardStyle}
          contentLabel='sans-serif'>

          <form onSubmit={this.handleSubmit}>
            <p>Create Pin</p>
            {this.renderErrors()}
            <hr className="line-break" />
            <div className="form-content">
              <label htmlFor="board">Pin to</label>
                <select onChange={this.update('board')}
                  defaultValue="select board"
                  className="form-input-field topic-selector" >
                  <option disabled value="select board">Select Board</option>
                  {this.boardOptions()}
                </select>
            </div>
            <hr className="line-break" />
            <div className="form-content">
              <label htmlFor="topic">Topic</label>
              <select onChange={this.update('topic_id')}
                defaultValue="select topic"
                className="topic-selector form-input-field">
                <option disabled value="select topic">Select Topic</option>
                {this.topicOptions()}
              </select>
            </div>
            <hr className="line-break" />
            <div className="form-content">
              <label htmlFor="file">Upload Image</label>
              <input type="file" onChange={this.updateFile}
                className="form-input-field uploader" />
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
          </form>
          <hr className="line-break" />
          <div className="board-form-buttons">
            <button className="basic-button" onClick={this.closeModal}>Cancel</button>
            <button className="basic-button" onClick={this.handleSubmit}>Create</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewPin;

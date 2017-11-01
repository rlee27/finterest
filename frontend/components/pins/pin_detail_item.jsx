import React from 'react';
import Modal from 'react-modal';
import pinStyle from './pin_style';
import SavePin from './save_pin_container';
import { Link } from 'react-router-dom';

class PinDetailItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    if (!this.props.pin.id) {
      return this.props.getPin(this.props.pinId);
    }
  }

  componentWillUnmount() {
    this.props.receivePin({});
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.history.go(-1);
  }

  render() {
    if (this.props.pin) {
      return(
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={pinStyle}
          contentLabel='sans-serif'>
          <div className="modal-close" onClick={this.closeModal}>
            X
          </div>
          <div className="pin-show">
            <SavePin pin={this.props.pin}/>
            <div className="pin-show-container">
              <img className="pin-show-image" src={this.props.pin.image_url} />
            </div>
            <hr className="line-break" />
            <button>
              <a href={`${this.props.pin.pin_url}`} target="_blank">Source</a>
            </button>
            <hr className="line-break" />
            <button>
              <img className="user-avatar" src={this.props.pin.author_avatar}/>
              <Link to={`/${this.props.pin.author_id}`}>{this.props.pin.author_name}</Link>
            </button>
          </div>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default PinDetailItem;

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
          <div className="pin-show">
            <SavePin pin={this.props.pin}/>
            <div className="pin-show-container">
              <img className="pin-show-image" src={this.props.pin.image_url} />
            </div>
            <hr className="line-break" />
            <button>
              <Link to={`${this.props.pin.image_url}`}>Visit</Link>
            </button>
            <hr className="line-break" />
            <button>
              <Link to={`/pins/${this.props.pin.author_id}`}>To Author</Link>
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

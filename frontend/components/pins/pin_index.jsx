import React from 'react';
import { values } from 'lodash';
import NewPinContainer from './new_pin_container';
import EditPinContainer from './edit_pin_container';
import SavePinContainer from './save_pin_container';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class PinIndex extends React.Component {
  pinList() {
    const allUserPins = values(this.props.userPins);
    return allUserPins.map((pin) => {
      return (
        <li className="pin-card" key={pin.id}>
          <div className="pin-options">
            <div className="pin-edit-button">
              <EditPinContainer pin={pin} />
            </div>
            <div className="save-button">
              <SavePinContainer pin={pin} />
            </div>
          </div>
          <Link to={`/pins/${pin.id}`}>
            <div className="pin-cover">
              <img src={pin.image_url} className="pin-image"/>
            </div>
          </Link>
        </li>
      );
    });
  }

  protectedPinCreate() {
    if (this.props.user) {
      if (this.props.user.id === this.props.currentUser.id) {
        return <NewPinContainer /> ;
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Masonry
          className="pin-index"
          elementType="ul">
          {this.protectedPinCreate()}
          {this.pinList()}
        </Masonry>
      </div>
    );
  }
}

export default PinIndex;

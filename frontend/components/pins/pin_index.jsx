import React from 'react';
import { values } from 'lodash';
import NewPinContainer from './new_pin_container';
import EditPinContainer from './edit_pin_container';
import SavePinContainer from './save_pin_container';
import { Link } from 'react-router-dom';

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
      // ????? does it need to be a container if it is just a form?
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul className="pin-index">
        {this.protectedPinCreate()}
        {this.pinList()}
      </ul>
    );
  }
}

export default PinIndex;

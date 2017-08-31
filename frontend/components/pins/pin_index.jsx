import React from 'react';
import { values } from 'lodash';
import NewPinContainer from './new_pin_container';
import EditPinContainer from './edit_pin_container';
import SavePinContainer from './save_pin_container';

class PinIndex extends React.Component {
  pinList() {
    const allUserPins = values(this.props.userPins);
    return allUserPins.map((pin) => {
      return (
        <li key={pin.id} className="board-card">
          <div className="edit-button">
            <EditPinContainer pin={pin} />
          </div>
          <div className="save-button">
            <SavePinContainer pin={pin} />
          </div>
          <div className="board-cover">
            <img src={pin.image_url} />
          </div>
        </li>
      );
    });
  }

  protectedPinCreate() {
    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return <NewPinContainer /> ;
      // ????? does it need to be a container if it is just a form?
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul className="board-index">
        {this.protectedPinCreate()}
        {this.pinList()}
      </ul>
    );
  }
}

export default PinIndex;

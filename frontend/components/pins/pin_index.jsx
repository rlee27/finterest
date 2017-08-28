import React from 'react';
import { values } from 'lodash';

class PinIndex extends React.Component {
  pinList() {
    const allUserPins = values(this.props.userPins);
    return allUserPins.map((pin) => {
      return (
        <li key={pin.id}>
          this will be a link to pin show.
        </li>
      );
    });
  }

  protectedPinCreate() {
    if (this.props.currentUser.id === this.props.user.id) {
      return (
        <NewPinContainer />
      );
      // ????? does it need to be a container if it is just a form?
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul>
        {this.protectedPinCreate()}
        {this.pinList()}
      </ul>
    );
  }
}

export default PinIndex;

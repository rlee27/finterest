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

  render() {
    return (
      <ul>
        {this.pinList()}
      </ul>
    );
  }
}

export default PinIndex;

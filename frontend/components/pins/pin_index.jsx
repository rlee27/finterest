import React from 'react';
import { values } from 'lodash';
import NewPinContainer from './new_pin_container';

class PinIndex extends React.Component {
  pinList() {
    const allUserPins = values(this.props.userPins);
    return allUserPins.map((pin) => {
      return (
        <li key={pin.id} className="board-card">
          <div className="board-cover">
            <img src={pin.image_url} />
          </div>
        </li>
      );
    });
  }

  // protectedPinCreate() {
  //   if (this.props.currentUser.id === this.props.user.id) {
  //     return <NewPinContainer /> ;
  //     // ????? does it need to be a container if it is just a form?
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    return (
      <ul className="board-index">
        <NewPinContainer />
        {this.pinList()}
      </ul>
    );
  }
}

export default PinIndex;

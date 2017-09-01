import React from 'react';
import { Link } from 'react-router-dom';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.goToBoards = this.goToBoards.bind(this);
    this.goToPins = this.goToPins.bind(this);
  }

  goToBoards() {
    this.props.history.push(`/${this.props.user.id}/boards`);
  }

  goToPins() {
    this.props.history.push(`/${this.props.user.id}/pins`);
  }

  switchBoardPin() {
    return(
      <div className="board-pin-option">
        <button onClick={this.goToBoards} className="nav-button">Boards</button>
        <button onClick={this.goToPins} className="nav-button">Pins</button>
      </div>
    );
  }

  render() {
    return (
      <div className="user-info">
        <h2 className="user-name">
          {this.props.user.name}
        </h2>
        <img src={this.props.user.image_url} />
        {this.switchBoardPin()}
      </div>
    );
  }
}

export default UserDetail;

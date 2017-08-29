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
      <div>
        <button onClick={this.goToBoards} className="nav-button">Boards</button>
        <button onClick={this.goToPins} className="nav-button">Pins</button>
      </div>
    );
  }

  render() {
    return (
      <div className="user-info">
        <h2>
          {this.props.user.name}
        </h2>
        {this.switchBoardPin()}
      </div>
    );
  }
}

export default UserDetail;

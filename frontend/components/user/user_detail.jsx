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
        <button onClick={this.goToBoards} className="nav-button user-buttons">Boards</button>
        <button onClick={this.goToPins} className="nav-button user-buttons">Pins</button>
      </div>
    );
  }

  render() {
    return (
      <div className="user-box">
        <div className="user-info">
          <div className="user-details">
            <h2 className="user-name">
              {this.props.user.name}
            </h2>
          </div>
          <div className="user-pic-container">
            <img className="user-pic" src={this.props.user.image_url} />
          </div>
        </div>
        <br />
        {this.switchBoardPin()}
      </div>
    );
  }
}

export default UserDetail;

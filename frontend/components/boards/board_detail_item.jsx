import React from 'react';
import { values, keys } from 'lodash';
import EditBoardContiner from './edit_board_container';
import BoardPinContainer from '../pins/board_pin_container';

class BoardDetailItem extends React.Component {
  componentDidMount() {
    if (!keys(this.props.userBoards).includes(this.props.currentUser.board_ids[0])) {
      return this.props.getUser(this.props.currentUser.id)
        .then(() => {
          return this.props.getABoard(this.props.userId, this.props.boardTitle);
        });
    } else {
      return this.props.getABoard(this.props.userId, this.props.boardTitle);
    }
  }

  componentWillUnmount() {
    this.props.receiveABoard({board: {pin_ids: []}});
  }

  protectedEdit() {
    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return <EditBoardContiner />;
    } else {
      return null;
    }
  }

  render() {
    if (this.props.board.pin_ids) {
      return(
        <div>
          <div className="board-title-container">
            <div className="board-detail-info">
              <p className="board-detail-title">
                {this.props.board.title}
              </p>
              {this.protectedEdit()}
            </div>
            <p className="pin-counter">
              <span className="pin-count">{this.props.board.pin_ids.length}</span> pins
            </p>
          </div>
          <BoardPinContainer user={this.props.user}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BoardDetailItem;

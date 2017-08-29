import React from 'react';
import { values } from 'lodash';
import EditBoardContiner from './edit_board_container';

class BoardDetailItem extends React.Component {
  componentDidMount() {
    return this.props.getABoard(this.props.userId, this.props.boardTitle);
  }

  protectedEdit() {
    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return <EditBoardContiner />;
    } else {
      return null;
    }
  }

  renderPins() {
    return this.props.board.pin_ids.map((pinId) => {
      return (
        <li>
          {pinId}
        </li>
      );
    });
  }

  render() {
    if (this.props.board) {
      return(
        <div>
          <header>
            {this.protectedEdit()}
          </header>
          <h1>{this.props.board.title}</h1>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default BoardDetailItem;

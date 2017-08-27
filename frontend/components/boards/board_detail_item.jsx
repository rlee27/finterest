import React from 'react';
import { values } from 'lodash';
import EditBoardContiner from './edit_board_container';

class BoardDetailItem extends React.Component {
  componentDidMount() {
    return this.props.getABoard(this.props.userId, this.props.boardTitle);
  }

  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(this.props.userBoards).length !==
      Object.keys(nextProps.userBoards).length) {
        this.props.history.push(`/${this.props.userId}`);
    }
  }

  render() {
    if (this.props.board) {
      return(
        <div>
          <header>
            <EditBoardContiner />
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

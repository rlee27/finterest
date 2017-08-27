import React from 'react';
import { values } from 'lodash';
import EditBoardContiner from './edit_board_container';

class BoardDetailItem extends React.Component {
  componentDidMount() {
    return this.props.getABoard(this.props.userId, this.props.boardTitle);
  }

  render() {
    return(
      <div>
        <header>
          <EditBoardContiner />
        </header>
        <h1>{this.props.board.title}</h1>

      </div>
    );
  }
}

export default BoardDetailItem;

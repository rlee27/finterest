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

  protectedEdit() {
    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return <EditBoardContiner />;
    } else {
      return null;
    }
  }

  render() {
    if (this.props.board) {
      return(
        <div>
          {this.protectedEdit()}
          <BoardPinContainer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BoardDetailItem;

import React from 'react';
import { values } from 'lodash';

class BoardDetailItem extends React.Component {
  componentDidMount() {
    return this.props.getABoard(this.props.userId, this.props.boardTitle);
  }

  render() {
    return(
      <h1>{this.props.board.title}</h1>
    );
  }
}

export default BoardDetailItem;

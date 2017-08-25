import React from 'react';

class BoardDetailItem extends React.Component {
  render() {
    return(
      <h1>{this.props.board.title}</h1>
    );
  }
}

export default BoardDetailItem;

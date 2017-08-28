import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router-dom';
import NewBoardContainer from './new_board_container';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.boardDetails = this.boardDetails.bind(this);
  }

  // componentDidMount() {
  //   return this.props.getUserBoards(this.props.userId);
  // }
  // Commented out for now.. to prevent unnecessary database calls
  // May have to do something with this in the future

  boardDetails() {
    return (this.props.userBoards.map((board) => {
      return(
        <li key={board.id}>
          <Link to={`/${this.props.userId}/${board.title.split(" ").join("-")}`}>
            <button>
                {board.title}
            </button>
          </Link>
        </li>
      );
    }));
  }

  protectBoardCreate() {
    if (this.props.currentUserId === parseInt(this.props.userId)) {
      return <NewBoardContainer />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <ul className="board-index">
        <li>
          {this.protectBoardCreate()}
        </li>
        {this.boardDetails()}
      </ul>
    );
  }
}

export default BoardIndex;

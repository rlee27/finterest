import React from 'react';
import NewBoardContainer from '../boards/new_board_container';
import BoardIndexContainer from '../boards/board_index_container';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.protectBoardCreate = this.protectBoardCreate.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId)
      .then((user) => {
        return this.props.getUserBoards(this.props.userId);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params !== nextProps.match.params) {
      this.props.getUser(this.props.userId)
        .then((user) => {
          return this.props.getUserBoards(this.props.userId);
        });
    }
  }

  protectBoardCreate() {
    if (this.props.currentUser.id === parseInt(this.props.userId)) {
      return <NewBoardContainer />;
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
        <h2>
          This is the user's page who's email is {this.props.user.email}
        </h2>
        <div className="board-list">
          {this.protectBoardCreate()}
          <BoardIndexContainer />
        </div>
      </div>
    );
  }
}

export default User;

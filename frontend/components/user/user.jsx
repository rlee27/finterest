import React from 'react';
import NewBoardContainer from '../boards/new_board_container';
import BoardIndexContainer from '../boards/board_index_container';

class User extends React.Component {
  constructor(props) {
    super(props);
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

  render(){
    return(
      <div>
        <h2>
          This is the user's page who's email is {this.props.user.email}
        </h2>
        <div className="board-list">
          <NewBoardContainer />
          <BoardIndexContainer />
        </div>
      </div>
    );
  }
}

export default User;

import React from 'react';
import NewBoardContainer from '../boards/new_board_container';

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

  render(){
    return(
      <div>
        <h2>
          This is the user's page who's email is {this.props.user.email}
        </h2>
        <NewBoardContainer />
      </div>
    );
  }
}

export default User;

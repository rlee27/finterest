import React from 'react';
import NewBoardContainer from '../boards/new_board_container';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveCurrentUser(this.props.currentUser);
  }

  render(){
    return(
      <div>
        <h2>
          Hi, {this.props.currentUser.name}, the rest of the site is still
          under construction...
        </h2>
        <NewBoardContainer />
      </div>
    );
  }
}

export default User;

import React from 'react';
import NewBoardContainer from '../boards/new_board_container';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.refresh();
    }
  }

  logout() {
    this.props.logout();
  }

  render(){
    return(
      <div>
        <header>
          <button onClick={this.logout}>Log Out</button>
        </header>
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

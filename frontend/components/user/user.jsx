import React from 'react';
import { Route } from 'react-router-dom';
import NewBoardContainer from '../boards/new_board_container';
import BoardIndexContainer from '../boards/board_index_container';
import PinIndexContainer from '../pins/pin_index_container';
import UserDetailContainer from './user_detail_container';


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
      this.props.getUser(parseInt(nextProps.match.params.userId))
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

  checkUser() {
    if (this.props.user.name) {
      return <UserDetailContainer />;
    } else {
      return null;
    }
  }

  render(){
    return(
      <div>
        {this.checkUser()}
        <div className="board-list">
          {this.protectBoardCreate()}
          <Route exact path="/:userId" component={BoardIndexContainer} />
          <Route path="/:userId/boards" component={BoardIndexContainer} />
          <Route path="/:userId/pins" component={PinIndexContainer} />
        </div>
      </div>
    );
  }
}

export default User;

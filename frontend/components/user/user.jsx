import React from 'react';
import { Route } from 'react-router-dom';
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
      })
      .then(() => {
        return this.props.getUserPins(this.props.userId);
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

  render(){
    return(
      <div>
        <UserDetailContainer />
        <div className="board-list">
          <Route exact path="/:userId" component={BoardIndexContainer} />
          <Route path="/:userId/boards" component={BoardIndexContainer} />
          <Route path="/:userId/pins" component={PinIndexContainer} />
        </div>
      </div>
    );
  }
}

export default User;

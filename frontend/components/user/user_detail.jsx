import React from 'react';

class UserDetail extends React.Component {
  render() {
    return (
      <div className="user-info">
        <h2>
          {this.props.userName}
        </h2>
      </div>
    );
  }
}

export default UserDetail;

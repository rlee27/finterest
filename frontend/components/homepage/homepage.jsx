import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveCurrentUser(this.props.currentUser);
    if (!this.props.topics[1]) {
      return this.props.getTopics();
    }
  }

  render(){
    return(
      <div>
        <h2>
          Hi, {this.props.currentUser.name}, the rest of the site is still
          under construction...
        </h2>
      </div>
    );
  }
}

export default Homepage;

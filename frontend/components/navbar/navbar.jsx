import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
    this.toShow = this.toShow.bind(this);
  }

  toShow() {
    return this.props.history.push(`/${this.props.currentUser.id}`);
  }

  goHome() {
    if (!(this.props.location.pathname === "/")) {
      return this.props.history.push("/");
    } else {

    }
  }

  render() {
    if (!this.props.currentUserName) {
      return null;
    } else {
      return(
        <ul className="nav-bar">
          <div className="left-side-nav">
            <li>
              <button className="logo-button" onClick={this.goHome}>
                <div className="logo-image-container">
                  <img src={ window.staticImages.logo } className="logo-image"></img>
                </div>
              </button>
            </li>
          </div>
          <li>
            Search..
          </li>
          <div className="right-side-nav">
            <li>
              <button className="nav-button" onClick={this.goHome}>
                Home
              </button>
            </li>
            <li>
              <button className="nav-button">
                Explore
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={this.toShow}>
                <div className="nav-user">
                  <img className="user-avatar" src={this.props.currentUser.avatar_url} />
                  <span className="user-name">
                    {this.props.currentUserName}
                  </span>
                </div>
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={this.props.logout}>
                Log Out
              </button>
            </li>
          </div>
        </ul>
      );
    }
  }
}

export default NavBar;

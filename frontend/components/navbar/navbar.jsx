import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.toShow = this.toShow.bind(this);
  }

  logout() {
    this.props.logout();
  }

  toShow() {
    this.props.history.push(`/${this.props.currentUser.id}`);
  }

  goHome() {
    if (!(this.props.location.pathname === "/")) {
      this.props.history.push("/");
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
                🐬
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
                [user-img] {this.props.currentUserName}
              </button>
            </li>
            <li>
              <button className="nav-button" onClick={this.logout}>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { Redirect } from 'react-router-dom';
import BackgroundImage from './sign_up_background';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`error-${i}`}>{error}</li>;
        })}
      </ul>
    );
  }

  loginDemo() {
    const demoUser = {
      email: 'spongebob@example.com',
      password: 'password'
    };
    this.props.login(demoUser);
  }

  demoButton() {
    return(
      <button onClick={this.loginDemo}
        className="login-button-demo">
        Demo
      </button>
    );
  }

  signupButton() {
    return (
      <Link to="/">
        <button className="signup-button">
          Sign Up
        </button>
      </Link>
    );
  }

  render() {
    return(
      <div>
        <BackgroundImage />
        <header className="login-header">
          {this.signupButton()}
          {this.demoButton()}
        </header>
        <div className="form-container">
          <div className="session-form-container">
            <h3>Welcome to Finterest</h3>
            <img src={ window.staticImages.logo } className="login-logo"></img>
            <br />
            {this.renderErrors()}
            <form className="session-form" onSubmit={this.handleSubmit}>
              <label htmlFor="email" className="session-label">Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label htmlFor="password" className="session-label">Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;

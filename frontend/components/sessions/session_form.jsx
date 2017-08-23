import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return(
      <div className="session-form-container">
        <h3>Welcome to Finterest</h3>
        <br />
        {this.renderErrors()}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <br />
          <label htmlFor="password">Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
        <Link to="/">Sign up instead</Link>
      </div>
    );
  }
}

export default SessionForm;
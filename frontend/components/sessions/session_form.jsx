import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

  changeForm() {
    if (this.props.formType === 'login') {
      return <Link to="/">Sign up instead</Link>;
    } else {
      return <Link to="/login">Log in instead</Link>;
    }
  }

  render() {
    return(
      <div className="session-form-container">
        <h3>Welcome to Finterest</h3>
        <br />
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
        {this.changeForm()}
      </div>
    );
  }
}

export default SessionForm;

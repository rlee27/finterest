import React from 'react';
import BasicFields from './basic_fields';
import { merge } from 'lodash';
import AdditionalFields from './additional_fields';
import { Link } from 'react-router-dom';

const initialFields = {
  email: "",
  password: "",
  name: "",
  age: null,
  gender: "",
  step: 1,
  errors: []
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialFields;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {user: initialFields}, this.state);
    if (this.state.step === 1) {
      const nextState = merge({}, {user: initialFields}, this.state.step++);
      this.setState(nextState);
    } else {
      this.props.signup(user);
    }
  }

  loginButton() {
    return (
      <Link to="/login">
        <button className="login-button">Log In</button>
      </Link>
    );
  }

  render(){
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <header className="login-header">
              {this.loginButton()}
            </header>
            <div className="form-container">
              {this.renderErrors()}
              <BasicFields
                state={this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                />
            </div>
          </div>
        );
      case 2:
        return(
          <div>
            <header className="login-header">
              {this.loginButton()}
            </header>
            <div className="form-container">
              <AdditionalFields
                state={this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        );
    }
  }
}

export default SignUp;

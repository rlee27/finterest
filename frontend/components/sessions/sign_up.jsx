import React from 'react';
import BasicFields from './basic_fields';
import { merge } from 'lodash';
import AdditionalFields from './additional_fields';
import { Link } from 'react-router-dom';
import BackgroundImage from './sign_up_background';

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
    this.state = merge({}, initialFields, {errors: this.props.errors});

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
          return <li key={`error-${i}`} className="form-errors">{error}</li>;
        })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, {user: initialFields}, this.state);
    if (this.state.step === 1) {
      this.props.submit(user)
        .then(() => {
          const nextState = merge({}, this.state, this.state.step++);
          return this.setState(nextState);
        });
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

  renderForm() {
    switch (this.state.step) {
      case 1:
        return (
          <div>
            <header className="login-header">
              {this.loginButton()}
            </header>
            <div className="form-container">
              <BasicFields
                state={this.state}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                renderErrors={this.renderErrors}
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
                renderErrors={this.renderErrors}
              />
            </div>
          </div>
        );
    }
  }

  render(){
    return(
      <div>
        <BackgroundImage />
        {this.renderForm()}
      </div>
    );
  }
}

export default SignUp;

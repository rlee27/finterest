import React from 'react';
import BasicFields from './basic_fields';
import { merge } from 'lodash';
import AdditionalFields from './additional_fields';

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

  render(){
    switch (this.state.step) {
      case 1:
        return (
          <div>
          {this.renderErrors()}
          <BasicFields
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          </div>
        );
      case 2:
        return <AdditionalFields
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />;
    }
  }
}

export default SignUp;

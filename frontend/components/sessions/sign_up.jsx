import React from 'react';

const initialFields = {
  email: "",
  password: "",
  name: "",
  age: null,
  gender: ""
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, initialFields, this.state);
    if (this.state.step === 1) {
      const nextState = merge({}, initialFields, this.state.step++);
      this.setState(nextState);
    } else {
      this.props.signup(user);
    }
  }

  render(){
    switch (this.state.step) {
      case 1:
        return <BasicFields
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />;
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

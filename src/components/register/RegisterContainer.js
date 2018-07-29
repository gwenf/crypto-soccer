import React, { Component } from 'react';

import RegisterForm from './RegisterForm';

import './register.css';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };
    this.setWeb3 = this.setWeb3.bind(this);
  }

  setWeb3(web3) {
    this.setState({web3});
  }

  render() {
    return (
      <div className="register-container">
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterContainer;

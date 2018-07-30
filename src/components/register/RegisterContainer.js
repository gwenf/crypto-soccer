import React, { Component } from 'react';
import contract from 'truffle-contract';

import web3 from '../../web3';
import SoccerContract from '../../../build/contracts/Items.json';
import RegisterForm from './RegisterForm';

import './register.css';

const SoccerDapp = contract(SoccerContract);
SoccerDapp.setProvider(web3.currentProvider);

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var SoccerDappInstance;

    web3.eth.getAccounts((error, accounts) => {
      var account = accounts[0];
      SoccerDapp.deployed().then((instance) => {
        SoccerDappInstance = instance;
        return SoccerDappInstance.createUser(this.state.username, {from: account, gas: 6654755})
      }).then((res) => {
        console.log(res);
      })
    })
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    const { username } = this.state;
    return (
      <div className="register-container">
        <RegisterForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={username}
        />
      </div>
    );
  }
}

export default RegisterContainer;

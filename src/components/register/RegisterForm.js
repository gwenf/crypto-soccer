import React, { Component } from 'react';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <form className="sign-up">
        <h1 className="sign-up-title">Sign up</h1>
        <input typeName="text" className="sign-up-input" placeholder="username" autofocus />
        <input type="submit" value="Register" className="sign-up-button" />
      </form>
    </div>
  );
}

export default RegisterForm;

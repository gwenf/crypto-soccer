import React, { Component } from 'react';

const RegisterForm = ({ handleChange, handleSubmit, username }) => {
  return (
    <div className="register-form">
      <form className="sign-up" onSubmit={handleSubmit}>
        <h1 className="sign-up-title">Sign up</h1>
        <input
          typeName="text"
          className="sign-up-input"
          placeholder="username"
          value={username}
          onChange={handleChange}
          autofocus
        />
        <input type="submit" value="Register" className="sign-up-button" />
      </form>
    </div>
  );
}

export default RegisterForm;

import React from 'react';
import './LoginPage.css';
import userIcon from '../images/login_user.svg';
import lockIcon from '../images/Login_password.svg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="background">
      <div className="container">
        <h2 className="header">Login</h2>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Username"
            className="input"
            style={{ backgroundImage: `url(${userIcon})` }}
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Password"
            className="input"
            style={{ backgroundImage: `url(${lockIcon})` }}
          />
        </div>
        <button className="login-button">Login</button>
        <p className="signupText">
          New here?
          <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

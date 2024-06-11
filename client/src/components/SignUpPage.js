import React from 'react';
import './SignUpPage.css';
import userIcon from '../images/login_user.svg';
import lockIcon from '../images/Login_password.svg';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="background">
      <div className="container">
        <h2 className="header">Sign Up</h2>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Create Username"
            className="input"
            style={{ backgroundImage: `url(${userIcon})` }}
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Create Password"
            className="input"
            style={{ backgroundImage: `url(${lockIcon})` }}
          />
        </div>
        <button className="Signup-button">Sign Up</button>
        <p className="loginText">
            Already have an account? 
            <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

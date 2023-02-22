import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/instagram-logo.png";
import google from "../Assets/Images/googleplay-button.png";
import iphone from "../Assets/Images/apple-button.png";

import { AiFillFacebook } from "react-icons/ai";

//get user credentials

const LoginPage = ({
  setHasAccount,
  hasAccount,
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,

  emailError,
  passwordError,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    handleLogin();
  };

  return (
    <div className="lg-container">
      <div className="loginPage-container">
        {/* input container */}
        <div className="inputContainer">
          {/* logo */}
          <div className="loginPage-logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* get data container */}
          <form onSubmit={onSubmit} className="loginPage-submit">
            <div className="loginPage-submit-email">
              <input
                type="email"
                placeholder="Phone, number, username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="error_msg">{emailError}</p>

            <div className="loginPage-submit-password">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="error_msg">{passwordError}</p>

            <button type="submit" value="Login" className={`button-disabled`}>
              Log in
            </button>
          </form>
          {/* end of the form */}

          <p className="choseAnotherOption">
            <span>OR</span>
          </p>

          <div className="loginPage-link">
            <Link className="facebook-login">
              <AiFillFacebook />
              Log in with Facebook
            </Link>{" "}
            <br style={{ marginBottom: "20px" }}></br>
            <Link className="forgot-password">Forgot Password</Link>
          </div>
        </div>

        {/* sign in container */}
        <div className="signIn">
          <p>
            Dont have an account?{" "}
            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
          </p>
        </div>

        <div className="get-the-app">
          <p>get the app.</p>
          <div className="get-the-app-images">
            <img src={iphone} />
            <img src={google} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

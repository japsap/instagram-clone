import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/instagram-logo.png";
import google from '../Assets/Images/googleplay-button.png'
import iphone from '../Assets/Images/apple-button.png'

import { AiFillFacebook } from "react-icons/ai";


//get user credentials 
import useCrud from "../Hooks/useCrud";

const LoginPage = ({ setHasAccount, hasAccount }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [ showErr, setShowErr ] = useState(false)
  const [ error, setError ] = useState("Credentials too short!")


  const { postLoginUser } = useCrud()


  const onSubmit = (e) => {
    e.preventDefault();

    if(username.length <= 0 || password.length <= 0){
      return setShowErr(true)
    }

    postLoginUser(
      username,
      password
    )

  };

  return (
    <div className="loginPage-container">
      {/* input container */}
      <div className="inputContainer">
        {/* logo */}
        <div className="loginPage-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* get data container */}
        <form onSubmit={onSubmit} className="loginPage-submit">
          <div className="loginPage-submit-username">
            <input
              type="text"
              placeholder="Phone, number, username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="loginPage-submit-password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            value="Login"
            className={`button-disabled`}
          >
            Log in
          </button>

          {showErr && <p className="error_msg">{error}</p>}
        </form>
        {/* end of the form */}

        <p className="choseAnotherOption"><span>OR</span></p>

        <div className="loginPage-link">
          <Link className="facebook-login">
              <AiFillFacebook />
              Log in with Facebook
          </Link> <br style={{marginBottom:'20px'}}></br>
          <Link  className="forgot-password">
            Forgot Password
          </Link>
        </div>
      </div>

      {/* sign in container */}
      <div className="signIn">
        <p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
      </div>

      <div className="get-the-app">
        <p>get the app.</p>
        <div className="get-the-app-images">
            <img src={iphone}/>
            <img src={google}/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

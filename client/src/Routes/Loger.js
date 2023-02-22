import React, { useState } from "react";
import { useNavigate } from "react-router";


//components
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";

//firebase imports
import { auth } from "../Hooks/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";


const Loger = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password) 
      .then(() => navigate('/'))
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.code);
            break;
          case "auth/weak-password":
            setPasswordError(err.code);
            break;
        }
      });
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password) 
      .then(() => navigate('/'))
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.code);
            break;
          case "auth/weak-password":
            setPasswordError(err.code);
            break;
        }
      });
  }

  return (
    <>
      {!hasAccount ? (
        <LoginPage 
          setHasAccount={setHasAccount} 
          hasAccount={hasAccount}

          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}

          emailError={emailError}
          passwordError={passwordError}


          //no username here
          //no handleSign up here
        />
      ) : (
        <SigninPage 
          setHasAccount={setHasAccount} 
          hasAccount={hasAccount}

          email={email}
          password={password}
          username={username}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
          handleSignup={handleSignup}

          emailError={emailError}
          passwordError={passwordError}

          //no handlelogin here
        />
      )}
    </>
  );
};

export default Loger;

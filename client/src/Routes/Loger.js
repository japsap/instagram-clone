import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";

const Loger = () => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <>
      {!hasAccount ? (
        <LoginPage setHasAccount={setHasAccount} hasAccount={hasAccount}/>
      ) : (
        <SigninPage setHasAccount={setHasAccount} hasAccount={hasAccount}/>
      )}
    </>
  );
};

export default Loger;

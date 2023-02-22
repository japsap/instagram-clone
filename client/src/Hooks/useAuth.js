import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Hooks/firebase";
import React from "react";

const useAuth = () => {
  const [user, setUser] = React.useState("");

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return setUser(user);
      }
    });
  };

  React.useEffect(() => {
    authListener();
  }, []);

  return [user];
};

export default useAuth;

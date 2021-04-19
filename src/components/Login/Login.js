import React, { useContext } from "react";
import "firebase/auth";
import firebaseConfiq from "./firebase.confiq";
import { UserContext } from "../../App";
import * as firebase from "firebase";
import { useHistory, useLocation } from "react-router";
import "./Login.css";

const Login = () => {
  const [, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfiq);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        // ...
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch(() => {
        // ...
      });
  };
  return (
    <div className="login-align">
      <h4>Login</h4>
      <br />
      <br />

      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default Login;

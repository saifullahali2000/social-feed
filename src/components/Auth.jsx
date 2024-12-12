import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
    }
  };

  return (
    <div className="auth-container">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Auth;

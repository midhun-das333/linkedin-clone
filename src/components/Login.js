import React from 'react';

import './Login.css';

import { auth, provider } from '../firebase';

import { signInWithPopup } from 'firebase/auth';

function Login({ setUser }) {

  const login = () => {

    signInWithPopup(auth, provider)
      .then((result) => {

        setUser(result.user);

      })
      .catch((error) => {
        alert(error.message);
      });

  };

  return (
    <div className="login">

      <h1>LinkedIn Clone</h1>

      <button onClick={login}>
        Sign in with Google
      </button>

    </div>
  );
}

export default Login;
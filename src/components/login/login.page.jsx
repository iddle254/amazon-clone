import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.styles.css";
import { auth } from "../../firebase/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Signin</h1>
        <form action="">
          <h5 className="login__email">E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5 className="login__email">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={login} className="login__button">
            Sign in
          </button>
        </form>
        <p className="login__info">
          By signing in you agree to Amazon's terms and conditions. See our
          privacy policy .We use cookies
        </p>
        <button className="signup__button" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;

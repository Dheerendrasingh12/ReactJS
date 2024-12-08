import React, { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Login.css";
import { auth } from "./firebase";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Login() {
  console.log("Login Page");
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onClickReset() {
    console.log(email);
    console.log(password);
  }

  function onClickSubmit(e) {
    e.preventDefault();
    auth
      .singInWithEmailAndPassword(email, Password)
      .the((auth) => {
        navi.apply("/");
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <StorefrontIcon
        fontSize="large"
        className="login__logoImage"
      ></StorefrontIcon>
      <h2 className="login__logoTitle"> BJ Shop</h2>
      <div className="login__container">
        <h3>Sign-in</h3>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <p>
          By Signing in your agree to the bjShop website condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest BASED ads Notice.
        </p>
        <button onClick={onClickSubmit} className="login__signButton">
          Sign
        </button>
        <button className="login__signReset" onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Login;

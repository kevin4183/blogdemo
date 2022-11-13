import axios from "axios";
import React, { useRef, useContext } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context);

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton">Login</button>
      </form>
      {/* <button
        className="loginRegisterButton"
        type="submit"
        disabled={isFetching}
      >
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
      {error && (
        <span style={{ color: "red", margintop: "10px" }}>
          Wrong username or password!
        </span>
      )}
    </div>
  );
};

export default Login;

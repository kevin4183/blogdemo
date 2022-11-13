// import { Link } from "react-router-dom";
import { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setMsg(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      setMsg(true);
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      {msg && (
        <span style={{ color: "green", margintop: "10px" }}>Successful!</span>
      )}
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
          redquired="true"
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          redquired="true"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          redquired="true"
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {/* <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button> */}
      {error && (
        <span style={{ color: "red", margintop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;

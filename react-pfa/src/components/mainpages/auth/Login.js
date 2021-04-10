import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Button from "react-bootstrap";
// import './login.css';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
  
    <div className="login-page">
      {/* <img 
        src="https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg"
      /> */}
      <div className="login__container">
        <form onSubmit={loginSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            required
            autoComplete="on"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />

          <div className="row">
          {/* <Button className="primary">
              Login
            </Button> */}
            <button className="login__signInButton" type="submit">
              Login
            </button>
            <button className="login__registerButton">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      {/* <Link to="/">
        <img
          className="login__logo"
          alt= "amazon"
          src="http://www.star-dev.net/wp-content/uploads/2016/07/Logo-e-commerce-english.jpg"
        />
      </Link> */}
      <div className="login__container">
        <form onSubmit={registerSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />

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
            <button className="login__registerButton" type="submit">
              Register
            </button>
            <button className="login__signInButton">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

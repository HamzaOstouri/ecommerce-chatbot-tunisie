import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import {GlobalState} from '../../../GlobalState'
// import Loading from '../utils/loading/Loading'
import './CrudAccounts.css';

function CrudAccounts() {
  const state = useContext(GlobalState);
  const [users] = state.userAPI.user;

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

    //   window.location.href = "/";
    alert("ajout d utilisateur avec succés !")
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="crud-account">

      <h1>Bienvenue Admin</h1>
      <div className="list-user">
        <h2>liste Users</h2>
        <table style={{margin: "30px 0px"}}>
            <thead>
                <tr>
                    <th></th>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    // orderDetails.cart.map(item =>(
                    <tr key={users._id}>
                        {/* <td><img src={item.images.url} alt="" /></td> */}
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.password}</td>
                    </tr>
                    
                }
                {/* {
                    users.map(item =>(
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                    </tr>
                    ))
                } */}
                
            </tbody>
        </table>
      </div>

      <div className="login__container">
        <form onSubmit={registerSubmit} className="form">
          <h2>Creer user</h2>
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
              Créer User
            </button>
          </div>
        </form>
      </div>
      {/* <Link class="nav-link" to="/color"> <i class="fas fa-fw fa-chart-area"></i>Colors</Link>  */}
      {/* <Link><i>Ha</i></Link> */}
    </div>
  );
}

export default CrudAccounts;

import React from "react";
import "./Login.css";


function Login() {
  return (
    <div className="register--container">
      <form className="register--form">
        <label>Username</label>
        <br />
        <input className="input--field" type="text" placeholder="username" />
        <br />
        <label>Password</label>
        <br />
        <input
          className="input--field"
          type="password"
          placeholder="password"
        />    
       
        <br />
        <button className="submit--field" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

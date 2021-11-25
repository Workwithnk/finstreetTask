import React, { useState } from "react";
import { useHistory } from "react-router";
import "../Css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    let userEmail = localStorage.getItem("email");
    let userPass = localStorage.getItem("pass");

    if (userEmail === email) {
      if (userPass === pass) {
        alert("Login success");
        history.push("/");
      } else {
        alert("Invalid details");
      }
    } else {
      alert("Invalid details");
    }
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <form className="LoginForm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="enter your pass"
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;

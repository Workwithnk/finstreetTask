import React, { useState } from "react";
import { useHistory } from "react-router";
import "../Css/SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && pass) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
      history.push("/login");
    } else {
      alert("Invalid details");
    }
  };
  return (
    <div className="signUp">
      <h1>SignUp</h1>
      <form className="signupForm">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter your name here"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="enter your email here"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="pass"
          placeholder="enter your password here"
        />
        <button onClick={handleSignUp} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;

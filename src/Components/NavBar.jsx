import React from "react";
import { NavLink } from "react-router-dom";

import "../Css/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/">
        <h1>FinStreet</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

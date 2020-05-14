import React from "react";
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li className="nav-links">
        <NavLink to="/" style={indexColor}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

const indexColor = {
  color: "white",
  fontWeight: "bolder",
};

export default SignedOutLinks;

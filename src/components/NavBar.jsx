import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ location }) => {
  return (
    <nav>
      <h1 className="site-title ">NASA APOD APP</h1>
      {location.pathname !== "/" && <NavLink to="/" className="btn">Back</NavLink> }
    </nav>
  );
};

export default NavBar;

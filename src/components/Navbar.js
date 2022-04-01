import React from "react";
import logo from "../logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" width="60px" />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;

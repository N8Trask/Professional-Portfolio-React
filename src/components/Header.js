import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navigation";



function Header() {
  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
          <Link to="/">Nate Trask</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;
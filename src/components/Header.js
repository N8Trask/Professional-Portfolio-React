import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navigation";

function Header() {
  return (
    // Header Section with Flexbox and Padding
    <header className="flex-row px-1">
      {/* Logo */}
      <div className="logo">
        {/* Link to Home */}
        <h1>
          <Link to="/">Nate Trask</Link>
        </h1>
      </div>

      {/* Navigation Bar */}
      <NavBar></NavBar>
    </header>
  );
}

export default Header;

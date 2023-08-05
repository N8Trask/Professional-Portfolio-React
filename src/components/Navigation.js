import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // Navigation Bar Section
    <nav className="navbar">
      <ul className="flex-row">
        {/* About Me Link */}
        <li className="mx-2">
          <Link to="/about">About Me</Link>
        </li>

        {/* Portfolio Link */}
        <li className="mx-2">
          <Link to="/portfolio">Portfolio</Link>
        </li>

        {/* Contact Link */}
        <li className="mx-2">
          <Link to="/contact">Contact</Link>
        </li>

        {/* Resume Link */}
        <li className="mx-2">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

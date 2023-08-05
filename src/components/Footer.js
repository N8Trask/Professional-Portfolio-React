import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      {/* Footer */}
      <footer>
        <ul>
          {/* GitHub Link */}
          <a href="https://github.com/N8Trask" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/nate-trask-9298b2281" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>

          {/* Instagram Link */}
          <a href="https://www.instagram.com/nate.trask/?hl=en" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

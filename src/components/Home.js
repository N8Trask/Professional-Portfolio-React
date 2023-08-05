import React from "react";
import { Link } from "react-router-dom";
import Portrait from "../assets/images/profile_pic.png";

function Home() {
  return (
    <section className="home my-5">
      {/* Title and Introduction */}
      <div className="title">
        <h2>Hi, I'm Nate Trask</h2>
        <p>Welcome to my Portfolio!</p>
        {/* Link to Portfolio */}
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      {/* Self Portrait */}
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>
    </section>
  );
}

export default Home;
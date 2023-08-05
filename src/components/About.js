import React from "react";
import Portrait from "../assets/images/profile_pic.png";

function About() {
  return (
    <section class="about">
      {/* About Me Title */}
      <h1 id="about">About Me</h1>

      {/* Self Portrait */}
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>

      {/* About Me Text */}
      <p>
        Hello! I am Nate Trask, a detail-oriented entry-level software developer from Hibbing, MN.
        Proficient in web development languages like HTML, CSS, JavaScript, and frameworks like Node.js and React.
        I excel in problem-solving and continuously strive to learn the latest technologies.
        Experienced in managing teams and driving process improvements.
        Recently completed a Full Stack Software Development Certificate from the University of Minnesota.
        Let's connect and discuss how I can contribute to your software development goals.
        Email: trask.nate@gmail.com | LinkedIn: <a href="https://www.linkedin.com/in/nate-trask-9298b2281/">Nate Trask</a>
      </p>
    </section>
  );
}

export default About;

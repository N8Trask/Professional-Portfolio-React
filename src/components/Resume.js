import React from "react";

function Resume() {
  return (
    <section>
      <div className="center">
        <h1 id="about">My Resume</h1>
      </div>
      <div className="bottom-spacing">
        <a href={require("../assets/files/resume.txt")} download> 
          <h4>Download Resume</h4>
        </a>
      </div>
      <div>
        <h5>Front-End Proficiencies</h5>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>version control/Git</li>
          <li>responsive design</li>
        </ol>
        <br></br>
        <h5>Back-End Proficiencies</h5>
        <ol>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Model View Controller (MVC)</li>
          <li>REST</li>
          <li>Progressive Web Applications (PWA)</li>
        </ol>
        <br></br>
        <h5>Dev Tool Proficiencies</h5>
        <ol>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ol>
        <br></br>
        <h5>Database Proficiencies</h5>
        <ol>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ol>
      </div>
    </section>
  );
}

export default Resume;
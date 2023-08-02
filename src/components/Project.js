import React from "react";

import Soon from "../assets/images/comingSoon.jpg";
import HTS from "../assets/images/project1.png";
import Ninja from "../assets/images/project2.png";
import Weather from "../assets/images/weatherDashboard.png";

function Portfolio() {
  return (
    <section class="portfolio">
      <div className="center" style={{ textAlign: "center" }}>
        <h1 id="about">My Portfolio</h1>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={HTS} alt="lookUp" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/CML120/WWWW-Project-1/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://cml120.github.io/WWWW-Project-1/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={Ninja} alt="Make A'Point" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/JennaStrom/nutrition-ninja"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://hidden-lake-38607-a47be9049bc1.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={Weather} alt="Final Project" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/N8Trask/Weather-Dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://n8trask.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={Soon} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/N8Trask"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/N8Trask"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
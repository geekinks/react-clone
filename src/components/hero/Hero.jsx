import React from "react";
import "../../css/hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <button className="our-learning">Our Learning Environment</button>

      <h1 className="first-h1 state">State-of-the-Art</h1>
      <h1 className="first-h1 learning">Learning Facilities</h1>

      <p className="experience">
        Experience our modern labs and collaborative spaces designed to poster
        <br />
        <span>innovation and hands-on learning.</span>
      </p>

      <div className="first-div">
        <img src="../../../public/images/imgi_2_lab01.png" alt="Lab" />
        <div className="state-of">
          <h1>State-of-the-Art Learning Environment</h1>
          <p>
            Modern workstations equipped with latest technology for hands-on
            learning
          </p>
        </div>
      </div>

      <button className="success">Success Stories</button>

      <h1 className="second-h1">From Interns to</h1>
      <h1 className="second-h1 industry">Industry Leaders</h1>

      <p className="experience">
        Meet our alumni transformed from interns to leaders, entrepreneurs, and
        <br />
        <span>innovators across various industries.</span>
      </p>

      <div className="last-div">
        <div className="left-div">
          <img src="../../../public/images/left.jpg" alt="Alumni 1" />
          <p>Comrade Usman Shehu TKB</p>
          <p>Former Intern - NAS President</p>
          <p>Defense Project:</p>
          <p>Current Role:</p>
        </div>

        <div className="left-div">
          <img src="../../../public/images/middle.jpg" alt="Alumni 2" />
          <p>Comrade Abdulkadir Adamu</p>
          <p>Former Intern - ICT President</p>
          <p>Defense Project:</p>
          <p>Current Role:</p>
        </div>

        <div className="left-div">
          <img src="../../../public/images/right.jpg" alt="Alumni 3" />
          <p>Comrade Kamalluddeen Ibrahim Isah</p>
          <p>Former Intern - Software Director</p>
          <p>Defense Project:</p>
          <p>Current Role:</p>
        </div>
      </div>

      <div className="end-div">
        <button>{"<"} Previous</button>
        <button>Next {">"}</button>
      </div>
    </div>
  );
}
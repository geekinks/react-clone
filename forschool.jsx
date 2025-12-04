import React from "react";

const ForSchoolCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="material-icons icon">group</span>
        <span className="tag tag-green">For Schools</span>
      </div>

      <h2 className="title">Easy Adoption</h2>

      <p className="description">
        Transform your students into tech leaders. <br />
        Works offline. Proven curriculum. <br />
        Measurable results.
      </p>

      <ul className="features">
        <li>
          <span className="material-icons check">check_circle</span> Works without
          internet
        </li>
        <li>
          <span className="material-icons check">check_circle</span> Ready-to-use
          curriculum
        </li>
        <li>
          <span className="material-icons check">check_circle</span> Teacher
          training included
        </li>
        <li>
          <span className="material-icons check">check_circle</span> Student
          progress tracking
        </li>
      </ul>

      <button className="btn">Book Demo →</button>
    </div>
  );
};

export default ForSchoolCard;

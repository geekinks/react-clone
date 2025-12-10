import React, { useState } from "react";
import { ChooseSection } from "./ChooseSection";
import { SearchFilterRow } from "./SearchFilterRow";
import { FilterGrid } from "./FilterGrid";
import { CourseCard } from "./CourseCard";
import { CoursesPage } from "./CoursesPage";
import "./css/Courses.css";

function Courses() {
  return (
    <div className="choose-container">
      <h1>
        Choose Your <span>Tech Path</span>
      </h1>
      <p>From programming fundamentals to full-stack mastery, find the perfect course</p>
      <p>to launch your tech career in Northern Nigeria.</p>
    </div>
  );
}

export default Courses
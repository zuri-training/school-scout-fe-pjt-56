import React from "react";
import { ScholarshipCard } from "../ScholarshipCard/ScholarshipCard";
import '../../Scholarship/Scholarship.css'

const ProgramCardGrid = () => {
  return (
    <section className="program-block schpg-container">
      <div className="block">
        <h2 className="program__heading">Programs</h2>
        <div className="programs">
          <div className="program-nav">
            <p className="program__text">Search scholarships by programs</p>
            <a href="./" className="btn btn-tab btn-secondary">
              Undergraduate
            </a>
            <a href="./" className="btn btn-tab">
              Postgraduate
            </a>
          </div>
          <div className="grid grid-cols-3">
            <ScholarshipCard></ScholarshipCard>
          </div>
          <a href="./" className="btn btn-large btn-primary btn-more">
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramCardGrid;

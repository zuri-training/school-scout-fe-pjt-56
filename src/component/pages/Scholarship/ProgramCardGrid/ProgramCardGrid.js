import React from "react";
import { ScholarshipCard } from "../ScholarshipCard/ScholarshipCard";
import '../../Scholarship/Scholarship.css'
import { Link } from 'react-router-dom'

const ProgramCardGrid = () => {
  return (
    <section className="program-block schpg-container">
      <div className="block">
        <h2 className="program__heading">Programs</h2>
        <div className="programs">
          <div className="program-nav">
            <p className="program__text">Search scholarships by programs</p>
            <Link to="./" className="btn btn-tab btn-secondary">
              Undergraduate
            </Link>
            <Link to="./" className="btn btn-tab">
              Postgraduate
            </Link>
          </div>
          <div className="grid grid-cols-3">
            <ScholarshipCard></ScholarshipCard>
          </div>
          <Link to="/scholarship-list" className="btn btn-large btn-primary btn-more">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramCardGrid;

import React from "react";
import { ScholarshipCard } from "../ScholarshipCard/ScholarshipCard";
import "../../Scholarship/Scholarship.css";

export const LocationCardGrid = () => {
  return (
    <section className="location-block schpg-container">
      <div className="block">
        <h2 className="location__heading">Locations</h2>
        <div className="locations">
          <div className="location-nav">
            <p className="location__text">Search scholarships by locations</p>
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

export default LocationCardGrid;

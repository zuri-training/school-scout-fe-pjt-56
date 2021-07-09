// import React from 'react';
import "../Scholarship/Scholarship.css";
import { ScholarshipListCardGrid } from "./ScholarshipListCardGrid/ScholarshipListCardGrid";
import { ScholarshipAsideCardGrid } from './ScholarshipAsideCardGrid/ScholarshipAsideCardGrid';
import searchIcon from '../Scholarship/images/search_icon.svg'

export function ScholarshipList() {
  return (
    <> 
        <div className="schpg-container">
          <div className="block schlshp-lst-top">
            <div>
              <h1 className="schlshp-lst-top-heading">See Latest Scholarships</h1>
              <p className="schlshp-lst-top-body">Fund your education with exclusive scholarships</p>
            </div>
            <div className="schlshp-lst-search-input-group">
              <img className="schlshp-lst-search-icon" src={ searchIcon } alt="" />
              <input className="schlshp-lst-search" type="search" name="" id="" placeholder="Search for Scholarships" />
            </div>
          </div>
          <div className="block schlshp-lst-main-section">
            <ScholarshipListCardGrid />
            <ScholarshipAsideCardGrid />
          </div>
        </div>
    </>
  );
}

export default ScholarshipList;
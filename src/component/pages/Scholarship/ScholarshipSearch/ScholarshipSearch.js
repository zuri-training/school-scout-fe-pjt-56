import React from "react";
import '../pages/Scholarship/Scholarship.css'

const ScholarshipSearch = () => {
  return (
    <div className="search-group">
      <h2 className="search-group-title">
        Search for the best scholarship for you
      </h2>
      <form action="" className="search-form">
        <div className="search-form__input-group">
          <label for="program">Program</label>
          <select
            required
            name="program"
            id="program"
            className="search-form__select-list"
          >
            <option value="" selected disabled hidden>
              Undergraduate
            </option>
            <option value="graduate">Graduate</option>
            <option value="post graduate">Post Graduate</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>
        <div className="search-form__input-group">
          <label for="program">Course</label>
          <select
            required
            name="program"
            id="program"
            className="search-form__select-list"
          >
            <option value="" selected disabled hidden>
              Choose course
            </option>
            <option value="graduate">Science</option>
            <option value="post graduate">Technology</option>
            <option value="doctorate">Arts</option>
          </select>
        </div>
        <div className="search-form__input-group">
          <label for="program">Location</label>
          <select
            required
            name="program"
            id="program"
            className="search-form__select-list"
          >
            <option value="" selected disabled hidden>
              Enter location
            </option>
            <option value="graduate">USA</option>
            <option value="post graduate">Canada</option>
            <option value="doctorate">Australia</option>
          </select>
        </div>
        <a href="./" className="btn btn-small btn-primary btn-search">
          Search
        </a>
      </form>
    </div>
  );
};

export default ScholarshipSearch;

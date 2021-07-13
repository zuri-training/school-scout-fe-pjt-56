// import React from 'react'
// import logo from '../pages/Scholarship/images/logo.svg'
// import search from '../pages/Scholarship/images/search.svg'
// import globe from '../pages/Scholarship/images/globe.svg'
// import bookmark from '../pages/Scholarship/images/bookmark.svg'
// import user from '../pages/Scholarship/images/user.svg'
// import menu from '../pages/Scholarship/images/menu-bar.svg'
// import "../pages/Scholarship/Scholarship.css";
import "../Header/ExploreHeader.css";

import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <header className="schpg-container nav-hero-blend">
      <section className="block hero">
        <h1 className="hero__heading">
          Your course and the Best <br />
          <strong>Schools that Offer it</strong>
        </h1>
        <div className="search-group">
          <h2 className="search-group-title">
            Search for schools by programs, course or location
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
            <Link
              to={process.env.PUBLIC_URL + "/"}
              className="btn btn-small btn-primary btn-search"
            >
              Find it
            </Link>
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;

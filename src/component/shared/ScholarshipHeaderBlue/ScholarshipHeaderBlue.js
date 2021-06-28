import logo from '../../pages/Scholarship/images/logo.svg'
import search from '../../pages/Scholarship/images/search.svg'
import globe from '../../pages/Scholarship/images/globe.svg'
import bookmark from '../../pages/Scholarship/images/bookmark.svg'
import user from '../../pages/Scholarship/images/user.svg'
import menu from '../../pages/Scholarship/images/menu-bar.svg'
import '../../pages/Scholarship/Scholarship.css'
import React from "react";
import { Link } from 'react-router-dom'

export const ScholarshipHeaderBlue = () => {
  return (
    <header className=".schpg-container hblue-schpg-container">
      <nav className="block block-center nav-container">
        <Link to="/"><img className="logo" src={logo} alt="" /></Link>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Explore schools</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Compare schools</Link>
          </li>
          <li className="nav-link">
            <Link to="/scholarship">Find scholarship</Link>
          </li>
          <li className="nav-link">
            <Link to="/career-advisory">Career advisory</Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/" className="nav-link-with-image">
              <img className="svg-icon" src={search} alt="search icon" />
              Search
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/" className="nav-link-with-image">
              <img className="svg-icon" src={globe} alt="" />
              Language
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/" className="nav-link-with-image">
              <img className="svg-icon" src={user} alt="" />
              User
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/" className="nav-link-with-image">
              <img className="svg-icon" src={bookmark} alt="" />
              Saved
            </Link>
          </li>
        </ul>
        <img className="menu" src={menu} alt="" />
      </nav>
    </header>
  );
};

export default ScholarshipHeaderBlue
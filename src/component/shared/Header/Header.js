// import React from 'react'
import logo from '../../pages/Scholarship/images/logo.svg'
import search from '../../pages/Scholarship/images/search.svg'
import globe from '../../pages/Scholarship/images/globe.svg'
import bookmark from '../../pages/Scholarship/images/bookmark.svg'
import user from '../../pages/Scholarship/images/user.svg'
import menu from '../../pages/Scholarship/images/menu-bar.svg'
import '../../pages/Scholarship/Scholarship.css'
import { Link } from 'react-router-dom'
import React from 'react'



export const Header = () => {
    return (
        <header className="schpg-container nav-hero-blend">
            <nav className="block block-center nav-container">
                <Link to="/"><img className="logo" src={ logo } alt="" /></Link>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">Explore schools</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/">Compare schools</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="hello" to="/scholarship">Find scholarship</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/">Career advisory</Link>
                    </li>
                </ul>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/" className="nav-link-with-image">
                            <img className="svg-icon" src={ search } alt="search icon" />
                            Search
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/" className="nav-link-with-image">
                            <img className="svg-icon" src={ globe } alt="" />                         
                            Language
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/" className="nav-link-with-image">
                            <img className="svg-icon" src={ user } alt="" />                           
                            User
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/" className="nav-link-with-image">
                            <img className="svg-icon" src={ bookmark } alt="" />                           
                            Saved
                        </Link>
                    </li>
                </ul>
                <img className="menu" src={ menu } alt="" />
            </nav>
            <section className="block hero">
                <h1 className="hero__heading">Grants and <br></br>
                    Scholarships, <br></br>
                    Matched <strong>JUST FOR YOU</strong>
                </h1>
                <div className="search-group">
                    <h2 className="search-group-title">Search for the best scholarship for you</h2>
                    <form action="" className="search-form">
                        <div className="search-form__input-group">
                            <label for="program">Program</label>
                            <select required name="program" id="program" className="search-form__select-list">
                                <option value="" selected disabled hidden>Undergraduate</option>
                                <option value="graduate">Graduate</option>
                                <option value="post graduate">Post Graduate</option>
                                <option value="doctorate">Doctorate</option>
                            </select>
                        </div>
                        <div className="search-form__input-group">
                            <label for="program">Course</label>
                            <select required name="program" id="program" className="search-form__select-list">
                                <option value="" selected disabled hidden>Choose course</option>
                                <option value="graduate">Science</option>
                                <option value="post graduate">Technology</option>
                                <option value="doctorate">Arts</option>
                            </select>
                        </div>
                        <div className="search-form__input-group">
                            <label for="program">Location</label>
                            <select required name="program" id="program" className="search-form__select-list">
                                <option value="" selected disabled hidden>Enter location</option>
                                <option value="graduate">USA</option>
                                <option value="post graduate">Canada</option>
                                <option value="doctorate">Australia</option>
                            </select>
                        </div>
                        <Link to="/" className="btn btn-small btn-primary btn-search">Search</Link>
                    </form>
                </div>
            </section>
        </header>
    )
}

export default Header

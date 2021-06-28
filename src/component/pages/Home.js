import React from 'react'
import SiteOptions from '../pages/Landing page/site options/SiteOptions'
import FeaturedSchools from '../pages/Landing page/featured schools/FeaturedSchools'
import Testimonials from '../pages/Landing page/Testimonials/Testimonials'
import Articles from '../pages/Landing page/Articles/Articles'
import Header from '../shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue'
import './Home.css'

import image1 from '../pages/Landing page/image1.png'
import image2 from '../pages/Landing page/image2.png'
import image3 from '../pages/Landing page/image3.png'
import undecided from '../pages/Landing page/undecided.png'
import { Link } from 'react-router-dom'
import './Scholarship/Scholarship.css'

export const Home = () => {
    return (
        <div>
            <Header/>
            <section className="landing-hero schpg-container">
                <div className="block landing-block">
                    <h1 className="lnd-hero__heading">Let’s help you make the <br /> best educational choices
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
                            <Link to={process.env.PUBLIC_URL + '/'} className="btn btn-small btn-primary btn-search">Search</Link>
                        </form>
                    </div>
                </div>
            </section>
            <section className='options landing-padding'>
                <div className="options-container">
                    <div className='options-top-section'>
                        <div className='options-top-text'>
                            <h2 className='texts'>Find the Best</h2>
                            <p className='texts'>Begin your research here now, and make the best decision ever</p>
                        </div>
                    </div>
                    <div className='options'>
                        <SiteOptions/>
                    </div>
                </div>
            </section>
            <section className="landing-und-cont">
                <div className='undecided-container landing-padding'>
                    <div className='left'>
                        <div>
                            <h2 className='texts'>Undecided about what course to study</h2>
                            <p className='texts'>let's help you discover what's best for you in 3 easy steps</p>
                        </div>
                            <div className='numbers'>
                                <div>
                                    <div className="img-number-wrapper">
                                        <img src={image1} alt="" />
                                    </div>
                                    
                                    <p className='texts'>Get started</p>
                                </div>

                                <div>
                                    <div className="img-number-wrapper">
                                        <img src={image2} alt="" />
                                    </div>
                                
                                    <p className='texts'>Answer a few questions</p>
                                </div>

                                <div>
                                    <div className="img-number-wrapper">
                                        <img src={image3} alt="" />
                                    </div>
                                
                                    <p className='texts'>Voila! Your results are ready</p>
                                </div>
                            </div>
                        <div>
                            <button className='undecided'>Get Started</button>
                        </div>      
                    </div>
                    <div className='undecided4'>
                        <img src={undecided} alt="" />
                    </div>
                </div>
            </section>
            <section className="landing-padding">
                <div className="featured-container">
                    <div>
                        <div>
                            <h2>Featured Schools</h2>
                        </div>
                        <div></div>
                    </div>
                    <div className='schools'>
                        <FeaturedSchools/>
                    </div>
                    <div></div>
                </div>
            </section>
            <section className="landing-testimonial-section landing-padding">
                <div className="testimonials-container">
                    <div>
                        <h2 className='texts'>Testimonials</h2>
                        <p className='texts'>What people that have used this website have to say about us.</p>
                    </div>
                    <div className='testimonials'>
                        <Testimonials/>
                    </div>
                    <div>
                        <button>See More</button>
                    </div>
                </div>
            </section>
            <section className="landing-articles-section landing-padding">
                <div className="articles-container">
                    <div>
                        <div>
                            <h2 className='texts'>Articles</h2>
                            <p className='texts'>i bet you would want to read these articles, selected for you</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='articles'>
                        <Articles/>
                    </div>
                    <div></div>
                </div>
            </section>

        </div>
    )
}

export default Home
import React from 'react'
import SiteOptions from './site options/SiteOptions'
import FeaturedSchools from './featured schools/FeaturedSchools'
import Testimonials from './Testimonials/Testimonials'
import Articles from './Articles/Articles'
import Faq from './Landing page/FAQ/Faq'
import Header from '../component/shared/Header/Header'
import './Home.css'

import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import undecided from './undecided.png'

const Home = () => {
    return (
        <div>
            <section>
                
            </section>
            <Header/>
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
            <section>
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
            <section>
                <div className="featured-container landing-padding">
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
            <section>
                <div className="testimonials-container landing-padding">
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
            <section>
                <div className="articles-container landing-padding">
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
            <Faq/>
        </div>
    )
}

export default Home

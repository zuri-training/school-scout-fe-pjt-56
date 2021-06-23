import React from 'react'

const home = () => {
    return (
        <>
            <div class="container">
                <h2>Find The Best</h2>
                <p>Begin your research here now, and make the best decision ever!</p>
                <div class="column">
                    <div class="col"><img src="Explore schools.png" alt="Explore schools"><p>Explore Schools</p></div>
                    <div class="col"><img src="compare schools.png" alt="Compare schools"> <p>Compare Schools</p></div>
                    <div class="col"><img src="career advisory.png" alt=""><p>Career Advisory</p></div>
                    <div class="col"><img src="find schorlaship.png" alt=""><p>Find Schorlaship</p></div>
                </div>
            </div>
            <section class="undecided">
                <div class="undecided-container">
                    <div class="undecided-column">
                        <div class="undecided-col">
                            <h2>undecided about what<br/> to study?</h2>
                            <p>let's help you discover what's best for you in 3 easy steps</p>
                        </div>
                        <div class="undecided-col-number">
                            <img src="1.png" alt=""/>
                            <img src="2.png" alt=""/>
                            <img src="3.png" alt=""/>
                        </div>
                        
                        
                    </div>
                    <div class="undecided-column">
                        <img src="undecided.png" alt=""/>
                    </div>
                </div>
                <!--Featured school-->
                <div class="container">
                    <h2>Featured Schools</h2>
                    <div class="column">
                        <div class="col"><img src="ui.png" alt="Explore schools"/><p>University of Ibadan, Oyo State</p></div>
                        <div class="col"><img src="uni ilorin.png" alt="Compare schools"/> <p>University of Ilorin, Kwara State</p></div>
                        <div class="col"><img src="lasu.png" alt=""/><p>Lagos State University, Lagos State</p></div>
                        <div class="col"><img src="covenant uni.png" alt=""/><p>Covenant University, Ogun State</p></div>
                    </div>
                </div>

                <!--Featured school end-->

            </section>
            <section class="testimonials">
                <div class="testimonials-container">
                    <h2>Testimonials</h2>
                    <p>what people that have used this website have to say about us</p>
                    <div class="testimonials-container-2">
                        <div class="testimonials-column">
                            <div class="testimonials-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sed<br/>
                                ut maiores asperiores eum at blanditiis debitis sequi. Fuga, possimus.</div>
                            <div class="testimonials-col">
                                <div class="testimonial-uni-pic">
                                    <div class="testimonial-uni">
                                        <p>Pauline Imade</p>
                                        <p>university of Lagos</p>
                                    </div>
                                    <img src="testimonial 1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="testimonials-column">
                            <div class="testimonials-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sed<br/>
                                ut maiores asperiores eum at blanditiis debitis sequi. Fuga, possimus.</div>
                            <div class="testimonials-col">
                                <div class="testimonial-uni-pic">
                                    <div class="testimonial-uni">
                                        <p>Pauline Imade</p>
                                        <p>university of Lagos</p>
                                    </div>
                                    <img src="testimonial 2.png" alt=""/>
                                </div>
                    </div>

                        </div>
                    </div>
                    <button class="testimonials-cta">see more</button>
                </div>
            </section>
            <!--Articles-->
            <div class="articles-container">
                <h2>Articles</h2>
                <p>i bet you would love to read these articles, selected just for you.</p>
                <div class="article-columns">
                    <div class="article-column-1">
                        <img src="medicine.png" alt=""/>
                        <div>
                            <h3>Why study Medicine???</h3>
                            <p>
                                When I was much younger,
                                I had wanted to study medicine, but then when I grew up,
                                I realized I had an abject fear of blood. Lol.
                                Dont laugh at me please. I don’t know... <a href="">Read more</a>
                            </p>
                        </div>
                    </div>
                    <div class="article-column-1">
                        <img src="schorlaship.png" alt="">
                        <div>
                            <h3>Why study Medicine???</h3>
                            <p>
                                When I was much younger,
                                I had wanted to study medicine, but then when I grew up,
                                I realized I had an abject fear of blood. Lol.
                                Dont laugh at me please. I don’t know... <a href="">Read more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div></div>
            </div>
        </>
    )
}

export default home

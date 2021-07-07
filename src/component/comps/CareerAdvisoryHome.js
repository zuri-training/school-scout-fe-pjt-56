import './CareerAdvisoryHome.css'
import homeIcon from './images/home-icon.svg'
import hat from './images/hat-icon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CareerAdvisoryHome() {

  function onClick(event) {

    let exploreType = (event.target.className === 'ah-card-1') ? event.target.children[1].textContent : event.target.parentElement.children[1].textContent;
    
    localStorage.setItem(exploreType.split(' ')[0], exploreType.split(' ')[1]);

    console.log(exploreType);
  }


  return (
    <main className='ah-main-body'>
      <section className='ah-wrapper'>
        <div className='ah-wrapper-content'>
          <div style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '126px 0 126px'
          }}>
            <h3 className='ah-header-3'>
              Career <span>ADVISORY</span>
            </h3>
            <h1 className='ah-main-header'>Answer a few questions about you</h1>
            <p className='ah-first-para'>
              We would use this information to suggest great courses that would
              match your personality and skill set{' '}
            </p>
            <Link className="ah-button" to={process.env.PUBLIC_URL + '/career-advisory/cap-2'}>Get started</Link>
          </div>
        </div>
      </section>
      <div className='ah-main-card-container'>
        <div>
          <section className='ah-card-section-container'>
            <div className='ah-center-contain'>
              {' '}
              <h2 className='ah-heading-2'>
                Already know what course you want to study?
              </h2>
              <p className='ah-second-para'>
                Explore schools and locations that matches your choice
              </p>
            </div>

            <div className='ah-center-contain'>
              <section className='ah-card center-contain'>
                <Link onClick={ (e) => onClick(e) } to={process.env.PUBLIC_URL + './'} className='ah-card-1'>
                  <img className='ah-img-1' src={hat} alt='' />
                  <h3 className='ah-heading3'>Explore schools</h3>
                  <p className='ah-para-3'>
                    Explore our list of schools and discover the one that is
                    great for you.
                  </p>
                </Link>
                <Link onClick={ (e) => onClick(e) } to={ process.env.PUBLIC_URL + './' } className='ah-card-1'>
                  <img className='ah-img-2' src={homeIcon} alt='' />
                    <h3 className='ah-heading3'>Explore locations</h3>
                    <p className='ah-para-3'>
                      Explore several locations to find the one that you prefer
                    </p>
                </Link>
              </section>
            </div>
          </section>

          <section className='ah-faq center-contain'>
            <h2 className='ah-heading2-2'>Frequently Asked Questions (FAQs)</h2>
            <p className='ah-para-4'>
              Do you need clarity on how the platform works ? Find answers to
              some of the questions most of our users ask.
            </p>
          </section>
          <div className='advisory-select-container'>
            <div className='select-container'>
              <select name='' id=''>
                <option value=''>what is school scout about?</option>
                <option value=''>
                  Its a platform that enables you get information on different
                  schools that you might be intersted in, without you going to
                  different websites to ssearch. It gives you all the
                  information you need, all in one place
                </option>
              </select>
            </div>
            <div className='select-container'>
              <select name='' id=''>
                <option value=''>How does the career advisory work?</option>
                <option value=''>
                  If you don’t have an idea of what course to study at the
                  university, you would answer a few questions about your skills
                  and passion, and what you are good at, and we would suggest
                  some great courses for you.
                </option>
              </select>
            </div>
            <div className='select-container'>
              <select name='' id=''>
                <option value=''>
                  Can I save schools and courses that I have interst in, to read
                  at a later time?
                </option>
                <option value=''>
                  Yes, you can save schools and courses by just clicking on the
                  bookmark icons on anything you want to save
                </option>
              </select>
            </div>
            <div className='select-container'>
              <select name='' id=''>
                <option value=''>
                  You can access your saved pages from the nav bar, and on your
                  profile
                </option>
                <option value=''>
                  You could use the search button on any page to search for
                  scholarships and other other thing you want to search for
                </option>
              </select>
            </div>
            <div className='select-container'>
              <select name='' id=''>
                <option value=''>
                  Do I get notifications when new scholarships are posted?
                </option>
                <option value=''>
                  You get notifications for scholarships when you sign up or
                  subscribe to our newsletter
                </option>
              </select>
            </div>
            <div className='select-container'>

            <select name='' id=''>
              <option value=''>How do I leave a review?</option>
              <option value=''>
                You can leave a review by going to the testimonials section of
                the homepage, clicking it and leaving a review
              </option>
            </select>
            </div>
          </div>

          {/* <section className='ah-box center-contain'>
            <details style={{ borderTop: 'none' }}>
              <summary>FAQ1</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>

            <summary>who is the scammest of them all</summary>
            <p className='ah-sch-adm-faq-details'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quod tempore incidunt voluptas! Distinctio deleniti provident
              nemo, architecto officia magnam commodi eius, maxime numquam,
              eaque nisi dolor molestiae fugit maiores.
            </p>

            <details>
              <summary>FAQ3</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>
            <details>
              <summary>FAQ4</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>
            <details>
              <summary>FAQ5</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>
            <details>
              <summary>FAQ6</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>
            <details>
              <summary>FAQ7</summary>
              <p className='ah-sch-adm-faq-details'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione quod tempore incidunt voluptas! Distinctio deleniti
                provident nemo, architecto officia magnam commodi eius, maxime
                numquam, eaque nisi dolor molestiae fugit maiores.
              </p>
            </details>
          </section> */}
        </div>
      </div>
    </main>
  )
}
export default CareerAdvisoryHome

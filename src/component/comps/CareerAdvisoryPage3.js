import "./CareerAdvisoryPage3.css";
import stroke from "./images/Stroke-1.svg";
import star from "./images/star.svg";
import hat from "./images/hat2.svg";
import arrowIcon from "./images/arrow-icon.svg";
import { Link } from "react-router-dom"

function CareerAdvisoryPage3() {

  function onClick(event) {
    console.log(event)
    if (Array.from(event.target.classList).includes('a3-card-1')) {
      event.target.classList.toggle('a3-card-1-active')
      console.log('hi link', Array.from(event.target.classList));
    } else if (event.target.parentElement.className.includes('a3-card-1')) {
      event.target.parentElement.classList.toggle('a3-card-1-active')
    }
  }

  function onClickA(event) {
    console.log('hi para', event.target.textContent);
    localStorage.setItem('course', event.target.textContent);
  }

  return (
    <>
      <main className="a3-block a3-main-container">
        <section className="a3-section-2">
          <div className="s3-section-top">
            <h2 className="a3-heading2">Explore the curated Courses</h2>
            <div className="a3-explore">
              <input
                className="a3-input"
                type="text"
                placeholder="Narrow your results"
              />
              <div className="a3-chevron">
                <a className="a3-chevron-icon" href="./">
                  {" "}
                  <img className="a3-img-1" src={stroke} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="a3-card">
            <div id="card1" onClick={ (e) => onClick(e) } className="a3-card-1 a3-card-1-active">
              <div className="a3-card-top">
                <img src={star} alt="star" />
                <h3 className="a3-card-heading">Top Courses</h3>
              </div>
              <p> Narrow your results, Narrow your results, Narrow your re.</p>
            </div>
            <div id="card2" onClick={ (e) => onClick(e) } className="a3-card-1">
              <div className="a3-card-top">
                <img src={hat} alt="star" /> 
                <h3 className="a3-card-heading">Top Schools</h3>
              </div>
              <p> Narrow your results, Narrow your results, Narrow your re.</p>
            </div>
          </div>
          <div className="a3-list-container">
            <ul className="a3-list">
              <li onClick={(e) => onClickA(e)} className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Accountancy</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Electrical Electronics Engineering</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Mathematics</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Physics</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Mechanical Engineering</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Materials Engineering</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
              <li onClick={ (e) => onClickA(e) } className="a3-div-item">
                <Link onClick={ (e) => onClick(e) } className="a3-list-link" to={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
                  <p>Biochemistry</p>
                  <div className="a3-img-2" href="./">
                    <img src={arrowIcon} alt="" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
export default CareerAdvisoryPage3;

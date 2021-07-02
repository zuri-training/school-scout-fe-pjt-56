import "./CareerAdvisoryPage3.css";
import stroke from "./images/Stroke-1.svg";
import star from "./images/star.svg";
import hat from "./images/hat2.svg";
import arrowIcon from "./images/arrow-icon.svg";

function CareerAdvisoryPage3() {
  return (
    <>
      <main className="a3-main-container">
        <section className="a3-section-2">
          <h2 className="a3-heading2">Explore the curated Courses</h2>
          <div className="a3-explore">
            <input
              className="a3-input"
              type="text"
              placeholder="Narrow your results"
            />
            <div className="a3-chevron">
              <a href="./">
                {" "}
                <img className="a3-img-1" src={stroke} alt="" />
              </a>
            </div>
          </div>
          <div className="a3-card">
            <div id="card1" className="a3-card-1">
              <h3>
                <img src={star} alt="star" /> Top Courses
              </h3>
              <p> Narrow your results, Narrow your results, Narrow your re.</p>
            </div>
            <div id="card2" className="a3-card-1">
              <h3>
                <img src={hat} alt="star" /> Top Schools
              </h3>
              <p> Narrow your results, Narrow your results, Narrow your re.</p>
            </div>
          </div>
          <div className="a3-list-container">
            <ul className="a3-list">
              <div className="a3-div-item">
                <li>Accountancy</li>
                <a className="img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Electrical Electronics Engineering</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Mathematics</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Accountancy</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Accountancy</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Accountancy</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
              <div className="a3-div-item">
                <li>Accountancy</li>
                <a className="a3-img-2" href="./">
                  <img src={arrowIcon} alt="" />
                </a>
              </div>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
export default CareerAdvisoryPage3;

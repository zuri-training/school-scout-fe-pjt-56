import "./CareerAdvisoryPage6.css";
import leftArrow from "./images/left-arrow.svg";
import spiner from "./images/track.svg";

function CareerAdvisory6() {
  return (
    <>
      <div className="advisory6-container">
        {/* <header>
          <section className="a-header-container">
            <div className="a-main-content">
              <p>1</p>
              <a href="#">Tell us some basic information about you</a>
              <p>2</p>
              <a href="#">
                We will find great courses that matches your profile{" "}
              </a>
              <p>3</p>
              <a href="#">Pick a course and Explore !</a>
            </div>
          </section>
        </header> */}
        <main>
          <section className="a-main-section">
            <h2>What are your intrests</h2>
            <p>specify three (3)</p>

            <input type="text" />
          </section>
        </main>

        {/* <div className="a-control-btn">
          <button>
            <img src="./images/left-arrow.svg" alt="" /> Back
          </button>
        </div> */}
      </div>
      <div className="a-loader-div">
        <div className="loader"></div>
        <p>getting your course matches..</p>
      </div>
    </>
  );
}
export default CareerAdvisory6;
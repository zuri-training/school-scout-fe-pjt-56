import "./CareerAdvisoryTop.css";
import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";

export const CareerAdvisoryTop = () => {
  return (
    <section className="a2-header-container">
      <div className="a2-main-content">
        <div>
          {/* <p className="a2-label-rnd">1</p> */}
          <div>
            <img src={one} alt="" className="a2-label-rnd" />
          </div>
          <p className="a2-label">Tell us some basic information about you</p>
        </div>
        <div>
          {/* <p className="a2-label-rnd">2</p> */}
          <div>
            <img src={two} alt="" className="a2-label-rnd" />
          </div>
          <p className="a2-label">
            We will find great courses that matches your profile{" "}
          </p>
        </div>
        <div>
          {/* <p className="a2-label-rnd">3</p> */}
          <div>
            <img src={three} alt="" className="a2-label-rnd" />
          </div>
          <p className="a2-label">Pick a course and Explore !</p>
        </div>
      </div>
    </section>
  );
};

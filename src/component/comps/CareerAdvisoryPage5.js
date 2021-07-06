import "./CareerAdvisoryPage5.css";
import spinner from './images/spinner.png'
import { Spinner } from './Spinner'
import { Link } from "react-router-dom";

function CareerAdvisory5() {
  return (
    <>
      <main>
        <section className="a5-main-section">
          <div className="a5-cap-container">
            <h2 className="a5-cap-heading">What are your interests</h2>
            <p>specify three (3)</p>
            <input className="a5-cap-input" onKeyUp={ Spinner } type="text" id="myBtn"/>
          </div>
        </section>


        <div id="myModal" className="modalZ">
          <div className="modal-contentZ">
            <div>
              <div className="a5-spinner-containerZ">
                <img className="a5-spinnerZ" src={ spinner } alt="spinner indicating data processing" />
              </div>
              <p className="a5-spinner-text">getting your course matches...</p>
            </div>
          </div>
        </div>

        <Link id="cap-link-to-login" to={process.env.PUBLIC_URL + '/login'} style={ {display: "none"} }></Link>

      </main>
    </>
  );
}
export default CareerAdvisory5;

import "./CareerAdvisoryPage4.css";
import { Link } from "react-router-dom";
function CareerAdvisory4() {

  function onClick(event) {
    console.log(event.target.textContent);
    localStorage.setItem('o-level', event.target.textContent);
  }

  return (
    <>
      <main>
        <section className="a4-main-section">
          <div className="a4-cap4-container">
            <h1 className="a4-cap4-heading">In which O'Level Subject pairs did you excel the most?</h1>
            <p className="a4-cap4-p">We will use this to streamline our great suggestions for you</p>
            <section className="a4-btn-container">
              <Link to={process.env.PUBLIC_URL + '/career-advisory/cap-5'} onClick={ (e) => onClick(e) } id="btn-1" className="a4-main-btn">Chemistry / Physics</Link>
              <Link to={process.env.PUBLIC_URL + '/career-advisory/cap-5'} onClick={ (e) => onClick(e) } className="a4-main-btn">Account / Economics</Link>
              <Link to={process.env.PUBLIC_URL + '/career-advisory/cap-5'} onClick={ (e) => onClick(e) } className="a4-main-btn">Litrature / Government</Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
export default CareerAdvisory4;

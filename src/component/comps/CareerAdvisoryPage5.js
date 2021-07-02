import "./careerAdvisoryPage5.css"
import leftArrow from "./images/left-arrow.svg"

function CareerAdvisory5(){
 return(
  <>
  <header>
  <section className="a5-header-container">
   <div className="a5-main-content">
    <p>1</p>
    <a href="#">Tell us some basic information about you</a>
    <p>2</p>
    <a href="#">We will find great courses that matches your profile </a>
    <p>3</p>
    <a href="#">Pick a course and Explore !</a>
   </div>
  </section>
 </header>
 <main>
  <section className="a5-main-section">
   <h2>What are your intrests</h2>
   <p>specify three (3)</p>
   <input type="text" />
  </section>
 </main>
 <div className="a5-control-btn">
  <button><img src="./images/left-arrow.svg" alt="" /> Back</button>
 </div>
  </>
 )
}
export default CareerAdvisory5
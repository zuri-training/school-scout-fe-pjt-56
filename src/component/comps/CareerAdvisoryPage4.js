import "./careerAdvisoryPage4.css"
import leftArrow from "./images/left-arrow.svg"
function CareerAdvisory4(){
 return (
  <>
  <header>
  <section className="a4-header-container">
   <div className="a4-main-content">
    <p>1</p>
    <a href="./">Tell us some basic information about you</a>
    <p>2</p>
    <a href="./">We will find great courses that matches your profile </a>
    <p>3</p>
    <a href="./">Pick a course and Explore !</a>
   </div>
  </section>
 </header>
 <main>
  <section className="a4-main-section">
<h1>In which O'Level Subject pairs did you excel the most?</h1>
<p>We will use this to streamline our great suggestions for you</p>

<section className="a4-btn-container">
 <button id="btn-1" className="a4-main-btn">Chemistry/Physics</button>
 <button className="a4-main-btn">Account/Economics</button>
 <button className="a4-main-btn">Litrature/Government</button>
</section>
  </section>
 </main>
  <div className="a4-control-btn">
   <button><img src={leftArrow} alt="" /> Back</button>
  </div>
</>
 )
}
export default CareerAdvisory4
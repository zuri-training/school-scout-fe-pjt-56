import "./UserProfile.css"
import image from "../components/images/image.svg"
import search from "../components/images/search.svg"
import badge from "../components/images/badge.svg"
import pencil from "../components/images/pencil 1.svg" 
import refresh from "../components/images/refresh 2.svg"

function UserProfile(){
 return(
<>
<header>
  <div></div>
 </header>
 <main className="main-container">
  <section className="main-section">
   <div className="card-1">
    <img className="picture"src={image} alt="" />
    <h3>Edijana George</h3>
    <p className="h3-para">Lagos, Nigeria</p>
    <div className="card-1-search">
     <img src={search} alt="search-svg" />
     <p>Recent visits</p>
    </div>
    <div className="card-1-badge">
     <img src={badge} alt="" />
     <p>Saved items</p>
    </div>
    <button type="submit" className="card-1-btn1"><img className="pencil" src={pencil}alt="" /> Edit your profile</button>
    <button type="submit" className="card-1-btn2">Log out</button>
   </div>

   <form action="" method="GET">
     <input type="text" placeholder="First name" className="form-input" />
     <input type="text" placeholder="Last name" className="form-input" />
     <input type="text" placeholder="Enter phone number" className="form-input" />
     <input type="text" placeholder="Enter email address" className="form-input" />
    
     <select name="" id="" className="form-input">
      <option value="">Gender</option>
      <option value="">Male</option>
      <option value="">Female</option>
     </select>
     <select name="" id="" className="form-input">
      <option value="">Educational level</option>
      <option value="">Secondary school graduate</option>
      <option value="">Undergraduate student</option>
      <option value="">Gradute</option>
      <option value="">Postgraduate student</option>
     </select>
     <select name="" id="" className="form-input">
      <option value="">Country</option>
      <option value="">Nigeria</option>
      <option value="">Ghana</option>
      <option value="">South Africa</option>
     </select>
     <select name="" id="" className="form-input">
      <option value="">State of Residence</option>
      <option value="">Delta State</option>
      <option value="">Kogi state</option>
     </select>
     <div className="div-input">
      <p>Would you like to receive our newsletters?</p>
      <div className="checkbox-container-1">
        <input type="checkbox"  className="" />
      <label for="">Yes</label>
      </div>
      <div className="checkbox-container-2">
        <input type="checkbox" />
      <label for="">No</label>
      </div>
     </div>
      <button type="submit" className="form-btn"><img src={refresh} alt="" className="form-btn-img" /> Update</button>
   </form>
    </section>
    </main>
  </>
 );
}
export default UserProfile
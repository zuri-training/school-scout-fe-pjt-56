import './CareerAdvisoryPage2.css'
import { Link } from 'react-router-dom';

function Navigate(event) {
  alert('hi ' + event);
  // window.location = process.env.PUBLIC_URL + '/career-advisory/cap-3'
}

function CareerAdvisory2(){
 return (
   <>
     <main className='a2-main-container'>
       <h1 className="a2-p-cap">Where do you live ?</h1>
       <select onChange={ (e) => Navigate(e.target.value) } className='a2-select-btn' name='' id='state'>
         <option value='abia'>Choose a state</option>
         <option value='Lagos'>Lagos</option>
         <option value='Delta'>Delta</option>
         <option value='Abuja'>Abuja</option>
         <option value='Imo'>Imo</option>
         <option value="hi">Test
           <Link to={process.env.PUBLIC_URL + '/career-advisory/cap-3'}></Link>
         </option>
       </select>
     </main>
   </>
 )
}
export default CareerAdvisory2
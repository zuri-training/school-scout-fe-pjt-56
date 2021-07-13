import React, { Component } from "react";
import './CareerAdvisoryPage2.css'
import { withRouter } from "react-router-dom";

class CareerAdvisory2 extends Component {
  onChange = (e) => {
    localStorage.setItem('state', e.target.value.split(' ')[0])
    let strPath = process.env.PUBLIC_URL + '/career-advisory/' + e.target.value.split(' ')[1]
    this.props.history.push(strPath);
  }
  render() {
    return (
      <main className='a2-main-container'>
       <h1 className="a2-p-cap">Where do you live ?</h1>
       <select onChange={ this.onChange } className='a2-select-btn' name='' id='state'>
         <option value=''>Choose a state</option>
         <option value='Lagos cap-3'>Lagos</option>
         <option value='Delta cap-3'>Delta</option>
         <option value='Abuja cap-3'>Abuja</option>
         <option value='Imo cap-3'>Imo</option>
         <option value="Test cap-3">Oyo</option>
       </select>
     </main>
    );
  }
}

export const Menu = withRouter(CareerAdvisory2);

export default Menu









// import './CareerAdvisoryPage2.css'
// import { Link } from 'react-router-dom';


// function Navigate(event) {
//   let navLink = event.split(' ')[1]
//   // alert('hi ' + event.split(' ')[1]);
//   console.log(event)
//   // console.log(+event.target.baseURI[event.target.baseURI.length - 1] + 1)
//   console.log(event.target.baseURI.replace(event.target.baseURI[event.target.baseURI.length - 1], +event.target.baseURI[event.target.baseURI.length - 1] + 1))
//   event.baseURI = +event.target.baseURI[event.target.baseURI.length - 1] + 1
//   event.props.history.push(`/${navLink}`);
//   // window.location = process.env.PUBLIC_URL + '/career-advisory/cap-3'
// }

// function CareerAdvisory2(){
//  return (
//    <>
//      <main className='a2-main-container'>
//        <h1 className="a2-p-cap">Where do you live ?</h1>
//        {/* <select onChange={ (e) => Navigate(e.target.value) } className='a2-select-btn' name='' id='state'> */}
//        <select onChange={ this.onChange } className='a2-select-btn' name='' id='state'>
//          <option value=''>Choose a state</option>
//          <option value='Lagos cap-3'>Lagos</option>
//          <option value='Delta cap-3'>Delta</option>
//          <option value='Abuja cap-3'>Abuja</option>
//          <option value='Imo cap-3'>Imo</option>
//          <option value="Test cap-3">Test</option>
//        </select>
//      </main>
//    </>
//  )
// }


// // const Menu = withRouter(CareerAdvisory2);


// export default CareerAdvisory2
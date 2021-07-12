// import React from 'react';
import "./Scholarship.css";
// import Footer from './component/footer/Footer';
import Footer from '../../shared/footer/Footer';
// import ProgramCardGrid from './component/ProgramCardGrid/ProgramCardGrid';
import ProgramCardGrid from './ProgramCardGrid/ProgramCardGrid';
// import LocationCardGrid from './component/LocationCardGrid/LocationCardGrid';
import { LocationCardGrid } from "./LocationCardGrid/LocationCardGrid";
// import Header from '../../Header/Header'
import { Header } from "../../shared/Header/Header";
// import { ScholarshipBlock } from './component/ScholarshipBlock/ScholarshipBlock'
import { ScholarshipBlock } from './ScholarshipBlock/ScholarshipBlock'

function Scholarship() {
  return (
    <>
      <Header />
      <ProgramCardGrid/>
      <LocationCardGrid />
      <ScholarshipBlock />
      {/* <Footer/> */}
    </>
  );
}

export default Scholarship;
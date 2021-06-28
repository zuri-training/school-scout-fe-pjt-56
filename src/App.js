// import React from 'react';
import "./component/pages/Scholarship/Scholarship.css";
import Footer from './component/shared/footer/Footer';
import { ScholarshipList } from "./component/pages/ScholarshipList/ScholarshipList";
import Scholarship from './component/pages/Scholarship/Scholarship'
import { ScholarshipListCard } from "./component/pages/Scholarship/ScholarshipListCard/ScholarshipListCard";
import { ScholarshipListCardGrid } from "./component/pages/Scholarship/ScholarshipListCardGrid/ScholarshipListCardGrid";
import { ScholarshipAsideCardGrid } from './component/pages/Scholarship/ScholarshipAsideCardGrid/ScholarshipAsideCardGrid'
// import ProgramCardGrid from './component/ProgramCardGrid/ProgramCardGrid';
// import LocationCardGrid from './component/LocationCardGrid/LocationCardGrid';
// import Header from './component/Header/Header'
// import { ScholarshipBlock } from './component/ScholarshipBlock/ScholarshipBlock'

function App() {
  return (
    <> 
      {/* <Header />
      <ProgramCardGrid/>
      <LocationCardGrid />
      <ScholarshipBlock /> */}
      <Scholarship />
          {/* <ScholarshipListCardGrid />
          <ScholarshipAsideCardGrid /> */}
          {/* <ScholarshipList /> */}
        <Footer/>
    </>
  );
}

export default App;
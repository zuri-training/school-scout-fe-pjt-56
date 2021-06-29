// import React from 'react';
import "./component/pages/Scholarship/Scholarship.css";
import Footer from "./component/shared/footer/Footer";
import  ScholarshipList  from "./component/pages/ScholarshipList/ScholarshipList";
import Scholarship from "./component/pages/Scholarship/Scholarship";
import { ScholarshipListCard } from "./component/pages/ScholarshipList/ScholarshipListCard/ScholarshipListCard";
import { ScholarshipListCardGrid } from "./component/pages/ScholarshipList/ScholarshipListCardGrid/ScholarshipListCardGrid";
import { ScholarshipAsideCardGrid } from "./component/pages/ScholarshipList/ScholarshipAsideCardGrid/ScholarshipAsideCardGrid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./component/pages/Home";
import { ScholarshipHeaderBlue } from './component/shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue'
import { Login } from './component/pages/Login/Login'
// import ProgramCardGrid from './component/ProgramCardGrid/ProgramCardGrid';
// import LocationCardGrid from './component/LocationCardGrid/LocationCardGrid';
// import Header from './component/Header/Header'
// import { ScholarshipBlock } from './component/ScholarshipBlock/ScholarshipBlock'

function App() {
  return (
    <>
      <Router>
        {/* <Header />
        <ProgramCardGrid/>
        <LocationCardGrid />
        <ScholarshipBlock /> */}
        {/* <Scholarship /> */}
        {/* <ScholarshipListCardGrid />
            <ScholarshipAsideCardGrid /> */}
          <Switch>
          {/* <Route path={process.env.PUBLIC_URL + '/'}></Route> */}
            <Route exact path={process.env.PUBLIC_URL + '/scholarship'}>
              {/* <Home /> */}
              <Scholarship />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/login'}>
              <ScholarshipHeaderBlue />
              <Login />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/scholarship-list'}>
              {/* <Home /> */}
              <ScholarshipHeaderBlue />
              <ScholarshipList />
            </Route>
            {/* <Route exact path={process.env.PUBLIC_URL + '/'}> */}
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

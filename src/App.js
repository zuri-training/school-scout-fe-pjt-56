// import React from 'react';
import "./component/pages/Scholarship/Scholarship.css";
import Footer from "./component/shared/footer/Footer";
import  ScholarshipList  from "./component/pages/ScholarshipList/ScholarshipList";
import Scholarship from "./component/pages/Scholarship/Scholarship";
import CareerAdvisoryHome from "./component/comps/CareerAdvisoryHome";
import CareerAdvisoryPage2 from "./component/comps/CareerAdvisoryPage2";
import CareerAdvisoryPage3 from "./component/comps/CareerAdvisoryPage3";
import CareerAdvisory4 from "./component/comps/CareerAdvisoryPage4";
import CareerAdvisory5 from "./component/comps/CareerAdvisoryPage5";
import CareerAdvisory6 from "./component/comps/CareerAdvisoryPage6";
import { CompareSchoolHero } from "./component/pages/CompareSchoolPage/CompareSchoolHero/CompareSchoolHero";
import { CareerAdvisoryButton } from "./component/comps/CareerAdvisoryButton";
import { CareerAdvisoryTop } from './component/comps/CareerAdvisoryTop'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./component/pages/Home";
import { ScholarshipHeaderBlue } from './component/shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue'
import { Login } from './component/pages/Login/Login'
import { SignUp } from './component/pages/SignUp/SignUp'

function App() {
  return (
    <>
      <Router>
          <Switch>
          {/* <Route path={process.env.PUBLIC_URL + '/'}></Route> */}
            <Route exact path={process.env.PUBLIC_URL + '/scholarship'}>
              <Scholarship />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/login'}>
              <ScholarshipHeaderBlue />
              <Login />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/signup'}>
              <ScholarshipHeaderBlue />
              <SignUp />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/compare-school'}>
              <ScholarshipHeaderBlue />
              <CompareSchoolHero />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/scholarship-list'}>
              <ScholarshipHeaderBlue />
              <ScholarshipList />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryHome />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-2'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryTop />
              <CareerAdvisoryPage2 />
              <CareerAdvisoryButton />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-3'}>
              <ScholarshipHeaderBlue />
              {/* <CareerAdvisoryTop /> */}
              <CareerAdvisoryPage3 />
              {/* <CareerAdvisoryButton /> */}
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-4'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryTop />
              <CareerAdvisory4 />
              <CareerAdvisoryButton />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-5'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryTop />
              <CareerAdvisory5 />
              <CareerAdvisoryButton />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-6'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryTop />
              <CareerAdvisory5 />
              <CareerAdvisory6 />
              <CareerAdvisoryButton />
            </Route>
            {/* <Route> 
            <p>testing 404 page</p>
            </Route> */}
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

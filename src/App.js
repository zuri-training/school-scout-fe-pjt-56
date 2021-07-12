// import React from 'react';
import "./component/pages/Scholarship/Scholarship.css";
import ScrollToTop from "./component/shared/ScrollToTop";
import Footer from "./component/shared/footer/Footer";
import ScholarshipList from "./component/pages/ScholarshipList/ScholarshipList";
import Scholarship from "./component/pages/Scholarship/Scholarship";
import ScholarshipDetails from "./component/pages/ScholarshipDetails/ScholarshipDetails";
import CareerAdvisoryHome from "./component/comps/CareerAdvisoryHome";
import CareerAdvisoryPage2 from "./component/comps/CareerAdvisoryPage2";
import CareerAdvisoryPage3 from "./component/comps/CareerAdvisoryPage3";
import CareerAdvisory4 from "./component/comps/CareerAdvisoryPage4";
import CareerAdvisory5 from "./component/comps/CareerAdvisoryPage5";
import { CompareSchoolHero } from "./component/pages/CompareSchoolPage/CompareSchoolHero/CompareSchoolHero";
import { CareerAdvisoryButton } from "./component/comps/CareerAdvisoryButton";
import { CareerAdvisoryTop } from './component/comps/CareerAdvisoryTop'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./component/pages/Home";
import { ScholarshipHeaderBlue } from "./component/shared/ScholarshipHeaderBlue/ScholarshipHeaderBlue";
import { Login } from "./component/pages/Login/Login";
import { SignUp } from "./component/pages/SignUp/SignUp";

// The import files for explore courses
import ExploreComputerScience from "./component/pages/ExploreCourses/ExploreComputerSci/ExploreComputerScience";
import ExploreEconomics from "./component/pages/ExploreCourses/ExploreEconomics/ExploreEconomics";
import ExploreElectElect from "./component/pages/ExploreCourses/ExploreElectElect/ExploreElectElect";
import ExploreMBBS from "./component/pages/ExploreCourses/ExploreMBBS/ExploreMBBS";
import BookmarkPage from "./component/Bookmark/Bookmark";
// End of import files

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
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
            <Route exact path={process.env.PUBLIC_URL + '/scholarship-details'}>
              <ScholarshipHeaderBlue />
              <ScholarshipDetails />
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
            <Route exact path={process.env.PUBLIC_URL + '/career-advisory/cap-rslt'}>
              <ScholarshipHeaderBlue />
              <CareerAdvisoryPage3 />
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <Home />
            </Route>
            <Route path='*'> 
            <p style={{color: 'blue'}}>testing 404 page</p>
            </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

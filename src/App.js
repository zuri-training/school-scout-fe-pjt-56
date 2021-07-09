// import React from 'react';
import "./component/pages/Scholarship/Scholarship.css";
import Footer from "./component/shared/footer/Footer";
import ScholarshipList from "./component/pages/ScholarshipList/ScholarshipList";
import Scholarship from "./component/pages/Scholarship/Scholarship";
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
        <Switch>
          {/* <Route path={process.env.PUBLIC_URL + '/'}></Route> */}
          <Route exact path={process.env.PUBLIC_URL + "/scholarship"}>
            <Scholarship />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/login"}>
            <ScholarshipHeaderBlue />
            <Login />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/signup"}>
            <ScholarshipHeaderBlue />
            <SignUp />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/scholarship-list"}>
            <ScholarshipHeaderBlue />
            <ScholarshipList />
          </Route>
          {/* <Route exact path={process.env.PUBLIC_URL + '/'}> */}
          <Route path="/">
            <Home />
          </Route>

          {/* The components of explore courses   */}
          <Route path={process.env.PUBLIC_URL + "/bookmark"}>
            <BookmarkPage />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <ExploreComputerScience />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <ExploreEconomics />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <ExploreElectElect />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/"}>
            <ExploreMBBS />
          </Route>

          {/* End of components of explore courses   */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import './resources/css/common.css';
import './resources/css/front-page.css'
import './resources/css/about-me-page.css'
import './resources/css/project-page.css'
import './resources/css/resume-page.css'
import './resources/css/contact-page.css'
import './resources/css/navbar.css'
import './resources/css/fonts.css'
import './resources/css/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/MyNavBar";
import FrontPage from "./pages/FrontPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import ResumePage from "./pages/ResumePage";
import GiftGiver from "./project-pages/GiftGiver";
import Machining from "./project-pages/Machining";
import UiChallenges from "./project-pages/UiChallenges";
import IELTSEssays from "./project-pages/IELTSEssays";

function App() {
  return (
      <div className="common-app">
          <Router>
              <>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={FrontPage}/>
                      <Route exact path="/about-me" component={AboutMePage}/>
                      <Route exact path="/resume" component={ResumePage}/>
                      <Route exact path="/contact" component={ContactPage}/>
                      <Route exact path="/gift-giver" component={GiftGiver}/>
                      <Route exact path="/machining" component={Machining}/>
                      <Route exact path="/ielts-essays" component={IELTSEssays}/>
                      <Route exact path="/ui-challenges" component={UiChallenges}/>
                  </Switch>
              </>
          </Router>
      </div>
  );
}

export default App;

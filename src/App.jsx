import React from 'react';
import './App.css';
import './Mobile.css';
import NavBar from "./components/MyNavBar";
import FrontPage from "./pages/FrontPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import GiftGiver from "./portfolio-pages/GiftGiver";
import Machining from "./portfolio-pages/Machining";
import UiChallenges from "./portfolio-pages/UiChallenges";
import IELTSEssays from "./portfolio-pages/IELTSEssays";

function App() {
  return (
      <div className="common-app">
          <Router>
              <>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={FrontPage}/>
                      <Route exact path="/about-me" component={AboutPage}/>
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

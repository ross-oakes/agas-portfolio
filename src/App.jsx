import React from 'react';
import './App.css';
import NavBar from "./components/MyNavBar";
import FrontPage from "./pages/FrontPage"
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import GiftGiver from "./portfolio-pages/GiftGiver";

function App() {
  return (
      <div className="common-app">
          <Router>
              <>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={FrontPage}/>
                      <Route exact path="/about" component={AboutPage}/>
                      <Route exact path="/resume" component={ResumePage}/>
                      <Route exact path="/contact" component={ContactPage}/>
                      <Route exact path="/gift-giver" component={GiftGiver}/>
                  </Switch>
              </>
          </Router>
      </div>
  );
}

export default App;

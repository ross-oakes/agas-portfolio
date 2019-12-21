import React from 'react';
import './App.css';
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

function App() {
  return (
      <div className="common-app">
          <NavBar/>
          <Router>
              <Switch>
                  <Route path="/" exact={true}>
                      <FrontPage />
                  </Route>
                  <Route path="/about" exact={true}>
                      <AboutPage />
                  </Route>
                  <Route path="/resume" exact={true}>
                      <ResumePage />
                  </Route>
                  <Route path="/contact" exact={true}>
                      <ContactPage />
                  </Route>
                  <Route path="/gift-giver" exact={true}>
                      <GiftGiver />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;

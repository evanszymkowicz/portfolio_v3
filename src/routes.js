import React from "react";
import { Route } from 'react-router-dom';
import App from "containers/App/App";
import BriefAbout from "containers/BriefAbout/BriefAbout";
import Projects from "containers/Projects/Projects";
import AboutMe from "containers/AboutMe/AboutMe";
import Journalism from "containers/Journalism/Journalism";
import { ConnectedRouter as Router } from 'react-router-redux'

export default function createRoutes(store, history) {
  return (
    <Router history={history}>
      <div>
        <App>
          <Route exact path="/" component={BriefAbout} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Journalism" component={Journalism} />
        </App>
      </div>
    </Router>
  );
}

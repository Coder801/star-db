import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

export default class App extends Component {
  render() {
    return (
      <div className="sw-app container">
        <Router>
          <Header />

          <div className="row mb-3">
            <div className="col-sm-9 bg-light">
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />
            </div>
            <div className="col-sm-3">
              <RandomPlanet />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

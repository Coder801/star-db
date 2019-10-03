import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

import SwapiService from "../../services/swapi";
import { SwapiServiceProvider } from "../context";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="sw-app container">
            <Router>
              <Header />
              <div className="row mb-3">
                <div className="col-sm-9 bg-light">
                  <Route path="/people" exact component={PeoplePage} />
                  <Route path="/planets" exact component={PlanetsPage} />
                  <Route path="/starships" exact component={StarshipsPage} />

                  <Route
                    path="/people/:id"
                    render={({ match }) => (
                      <PersonDetails itemId={match.params.id} />
                    )}
                  />
                  <Route
                    path="/planets/:id"
                    render={({ match }) => (
                      <PlanetDetails itemId={match.params.id} />
                    )}
                  />
                  <Route
                    path="/starships/:id"
                    render={({ match }) => (
                      <StarshipDetails itemId={match.params.id} />
                    )}
                  />
                </div>
                <div className="col-sm-3">
                  <RandomPlanet />
                </div>
              </div>
            </Router>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

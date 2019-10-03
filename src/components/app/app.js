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

import style from "./style.module.css";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className={style.page}>
              <header className={style.header}>
                <Header />
              </header>
              <main className={style.main}>
                <Route path="/people" exact component={PeoplePage} />
                <Route path="/planets" exact component={PlanetsPage} />
                <Route path="/spaceships" exact component={StarshipsPage} />
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
                  path="/spaceships/:id"
                  render={({ match }) => (
                    <StarshipDetails itemId={match.params.id} />
                  )}
                />
              </main>
              <aside className={style.aside}>
                <RandomPlanet />
              </aside>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

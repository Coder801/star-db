import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import * as Pages from "../pages";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";

import SwapiService from "../../services/swapi";
import { SwapiServiceProvider } from "../context";

import "normalize.css";
import style from "./style.module.scss";

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
                <Switch>
                  <Route path="/" exact component={Pages.HomePage} />
                  <Route
                    path="/categories"
                    exact
                    component={() => <Pages.HomePage openCategories={true} />}
                  />
                  <Route path="/people" exact component={Pages.PeoplePage} />
                  <Route path="/films" exact component={Pages.FilmsPage} />
                  <Route path="/planets" exact component={Pages.PlanetsPage} />
                  <Route path="/species" exact component={Pages.SpeciesPage} />
                  <Route path="/vehicles" exact component={Pages.VehiclesPage} />
                  <Route path="/starships" exact component={Pages.StarshipsPage} />
                  <Route
                    path="/people/:id"
                    render={({ match }) => <PersonDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/planets/:id"
                    render={({ match }) => <PlanetDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/spaceships/:id"
                    render={({ match }) => <StarshipDetails itemId={match.params.id} />}
                  />
                </Switch>
              </main>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

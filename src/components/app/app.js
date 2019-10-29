import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import * as Pages from "../../pages";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  FilmDetails,
  SpecieDetails,
  VehicleDetails
} from "../sw-components";

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
            <div className={`${style.page} ${style.list}`}>
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
                  <Route path="/planets" exact component={Pages.PlanetsPage} />
                  <Route path="/starships" exact component={Pages.StarshipsPage} />
                  <Route path="/films" exact component={Pages.FilmsPage} />
                  <Route path="/species" exact component={Pages.SpeciesPage} />
                  <Route path="/vehicles" exact component={Pages.VehiclesPage} />
                  <Route
                    path="/people/:id"
                    render={({ match }) => <PersonDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/planets/:id"
                    render={({ match }) => <PlanetDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/starships/:id"
                    render={({ match }) => <StarshipDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/films/:id"
                    render={({ match }) => <FilmDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/species/:id"
                    render={({ match }) => <SpecieDetails itemId={match.params.id} />}
                  />
                  <Route
                    path="/vehicles/:id"
                    render={({ match }) => <VehicleDetails itemId={match.params.id} />}
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

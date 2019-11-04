import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../header";
import ErrorBoundry from "../error-boundry";
import { HomePage, List, Details } from "../../pages";

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
                  <Route path="/" exact component={HomePage} />
                  <Route
                    path="/categories"
                    exact
                    component={() => <HomePage openCategories={true} />}
                  />
                  <Route
                    path="/people"
                    exact
                    render={({ match }) => <List url={match.url} limit={12} />}
                  />
                  <Route
                    path="/planets"
                    exact
                    render={({ match }) => <List url={match.url} limit={10} />}
                  />
                  <Route
                    path="/starships"
                    exact
                    render={({ match }) => <List url={match.url} limit={6} />}
                  />
                  <Route
                    path="/films"
                    exact
                    render={({ match }) => <List url={match.url} limit={9} />}
                  />
                  <Route
                    path="/species"
                    exact
                    render={({ match }) => <List url={match.url} limit={10} />}
                  />
                  <Route
                    path="/vehicles"
                    exact
                    render={({ match }) => <List url={match.url} limit={6} />}
                  />
                  <Route
                    path="/people/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
                  />
                  <Route
                    path="/planets/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
                  />
                  <Route
                    path="/starships/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
                  />
                  <Route
                    path="/films/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
                  />
                  <Route
                    path="/species/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
                  />
                  <Route
                    path="/vehicles/:id"
                    render={({ match }) => <Details itemId={match.params.id} url={match.url} />}
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

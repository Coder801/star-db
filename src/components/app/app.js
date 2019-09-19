import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../person-page";
import PlanetPage from "../planet-page";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <div className="row mb-3">
          <div className="col-sm-9 bg-light">
            <PersonPage />
            <PlanetPage />
          </div>
          <div className="col-sm-3">
            <RandomPlanet />
          </div>
        </div>
      </div>
    );
  }
}

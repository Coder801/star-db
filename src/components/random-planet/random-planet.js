import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services/swapi";
import random from "../../services/random";

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  onError = error => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  async updatePlanet() {
    const totalPlanets = await this.swapiService.getTotalPlanets();
    const id = random(1, totalPlanets);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="jumbotron">
        <div className="container">
          {spinner}
          {errorMessage}
          {content}
        </div>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className="row">
      <div className="col-sm-4">
        <img
          className="card-img-top"
          alt={name}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
      </div>
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Population: {population}</li>
            <li className="list-group-item">
              Rotation Period: {rotationPeriod}
            </li>
            <li className="list-group-item">Diameter: {diameter}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

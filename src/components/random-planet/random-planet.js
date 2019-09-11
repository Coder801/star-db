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

  onImageError = () => {
    this.setState(state => ({
      ...state,
      planet: {
        ...state.planet,
        image: "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }
    }));
  };

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
    const content = hasData ? (
      <PlanetView planet={planet} onImageError={this.onImageError} />
    ) : null;

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

const PlanetView = ({ planet, onImageError }) => {
  const { id, image, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className="row">
      <div className="col-sm-4">
        <img
          className="card-img-top"
          alt={name}
          onError={onImageError}
          src={image}
        />
      </div>
      <div className="col-sm-6">
        <table className="table table-hover">
          <thead>
            <tr>
              <th colSpan="2">
                <h5 className="mb-0">
                  {name} <small>ID: {id}</small>
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Population:</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Rotation Period:</td>
              <td>{rotationPeriod}</td>
            </tr>
            <tr>
              <td>Diameter:</td>
              <td>{diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

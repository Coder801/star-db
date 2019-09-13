import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services/swapi";
import random from "../../services/random";

import "./style.css";

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  componentDidMount() {
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

  onError = () => {
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
      <React.Fragment>
        {spinner}
        {errorMessage}
        {content}
      </React.Fragment>
    );
  }
}

const PlanetView = ({ planet, onImageError }) => {
  const {
    id,
    image,
    name,
    population,
    rotationPeriod,
    diameter,
    orbitalPeriod,
    climate,
    gravity,
    terrain,
    surfaceWater
  } = planet;

  return (
    <div>
      <div className="card">
        <h5 className="card-header">{name}</h5>
        <img
          className="card-img-top"
          alt={name}
          onError={onImageError}
          src={image}
        />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {population}</li>
          <li className="list-group-item">Climate: {climate}</li>
          <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
          <li className="list-group-item">Gravity: {gravity}</li>
          <li className="list-group-item">Diameter: {diameter}</li>
          <li className="list-group-item">Terrain: {terrain}</li>
          <li className="list-group-item">Orbital Period: {orbitalPeriod}</li>
          <li className="list-group-item">SurfaceWater: {surfaceWater}</li>
        </ul>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object.isRequired,
  onImageError: PropTypes.func.isRequired
};

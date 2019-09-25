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
    hasError: false
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    //this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    //clearInterval(this.interval);
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onError = () => {
    this.setState({
      hasError: true,
      loading: false
    });
  };

  onImageError = event => {
    event.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = async () => {
    const totalPlanets = await this.swapiService.getTotalPlanets();
    const id = random(1, totalPlanets);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const content = !loading ? (
      <PlanetView planet={planet} onImageError={this.onImageError} />
    ) : (
      <Spinner />
    );

    return <div className="bg-light">{content}</div>;
  }
}

const PlanetView = ({ planet, onImageError }) => {
  const {
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
    <div className="card">
      <div className="card-header">
        <h5 className="text-white mb-0">Random planet</h5>
      </div>
      <img
        className="card-img-top"
        alt={name}
        onError={onImageError}
        src={image}
      />
      <div className="card-body">
        <h5 className="card-title text-white mb-0">{name}</h5>
      </div>
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
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object.isRequired,
  onImageError: PropTypes.func.isRequired
};

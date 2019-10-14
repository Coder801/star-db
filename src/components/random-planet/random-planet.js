import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services/swapi";
import { randomInteger } from "../../helpers";

import style from "./style.module.css";

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
    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = async () => {
    const totalPlanets = await this.swapiService.getTotalPlanets();
    const id = randomInteger(1, totalPlanets);
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
    <div className={style.card}>
      <h2 className={style.title}>Random planet</h2>
      <img className={style.image} alt={name} onError={onImageError} src={image} />
      <h3 className={style.name}>{name}</h3>
      <ul className={style.list}>
        <li>
          <span>Population:</span> {population}
        </li>
        <li>
          <span>Climate:</span> {climate}
        </li>
        <li>
          <span>Rotation Period:</span> {rotationPeriod}
        </li>
        <li>
          <span>Gravity:</span> {gravity}
        </li>
        <li>
          <span>Diameter:</span> {diameter}
        </li>
        <li>
          <span>Terrain:</span> {terrain}
        </li>
        <li>
          <span>Orbital Period:</span> {orbitalPeriod}
        </li>
        <li>
          <span>SurfaceWater:</span> {surfaceWater}
        </li>
      </ul>
    </div>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.object.isRequired,
  onImageError: PropTypes.func.isRequired
};

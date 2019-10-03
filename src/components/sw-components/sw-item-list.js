import { compose } from "ramda";
import React from "react";

import ItemList from "../item-list";
import { withData, withFunc, withSwapiService } from "../hoc-helpers";

const personsMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const planetsMethodToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});

const starshipsMethodToProps = swapiService => ({
  getData: swapiService.getAllStarships
});

const ListItemFormat = ({ name, image }) => (
  <React.Fragment>
    <img src={image} alt={name}></img>
    <h4>{name}</h4>
  </React.Fragment>
);

const PersonList = compose(
  withSwapiService(personsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const PlanetList = compose(
  withSwapiService(planetsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const StarshipList = compose(
  withSwapiService(starshipsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

export { PersonList, PlanetList, StarshipList };

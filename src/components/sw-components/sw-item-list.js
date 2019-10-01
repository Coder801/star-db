import { compose } from "ramda";
import React from "react";

import ItemList from "../item-list";
import {
  viewWithData,
  viewWithFunc,
  viewWithSwapiService
} from "../hoc-helpers";

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
    <img src={image} className="card-img-top" alt={name}></img>
    <div className="card-body">
      <p className="card-title">{name}</p>
    </div>
  </React.Fragment>
);

const PersonList = compose(
  viewWithSwapiService(personsMethodToProps),
  viewWithData,
  viewWithFunc(ListItemFormat)
)(ItemList);

const PlanetList = compose(
  viewWithSwapiService(planetsMethodToProps),
  viewWithData,
  viewWithFunc(ListItemFormat)
)(ItemList);

const StarshipList = compose(
  viewWithSwapiService(starshipsMethodToProps),
  viewWithData,
  viewWithFunc(ListItemFormat)
)(ItemList);

export { PersonList, PlanetList, StarshipList };

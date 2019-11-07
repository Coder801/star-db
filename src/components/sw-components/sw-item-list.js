import { compose } from "ramda";
import React from "react";

import ItemList from "../item-list";
import Image from "../../components/image";
import { withData, withFunc, withSwapiService } from "../hoc-helpers";

const personsMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const filmsMethodToProps = swapiService => ({
  getData: swapiService.getAllFilms
});

const planetsMethodToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});

const speciesMethodToProps = swapiService => ({
  getData: swapiService.getAllSpecies
});

const vehiclesMethodToProps = swapiService => ({
  getData: swapiService.getAllVehicles
});

const starshipsMethodToProps = swapiService => ({
  getData: swapiService.getAllStarships
});

const ListItemFormat = ({ name, image }) => (
  <React.Fragment>
    <Image src={image} alt={name} />
    <h4>{name}</h4>
  </React.Fragment>
);

const PersonList = compose(
  withSwapiService(personsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const FilmsList = compose(
  withSwapiService(filmsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const PlanetsList = compose(
  withSwapiService(planetsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const SpeciesList = compose(
  withSwapiService(speciesMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const VehiclesList = compose(
  withSwapiService(vehiclesMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

const StarshipsList = compose(
  withSwapiService(starshipsMethodToProps),
  withData,
  withFunc(ListItemFormat)
)(ItemList);

export { PersonList, FilmsList, PlanetsList, SpeciesList, VehiclesList, StarshipsList };

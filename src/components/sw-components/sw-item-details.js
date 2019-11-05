import React from "react";

import ItemDetails, { ListItem, ListItemDesc, ListItemPoint } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

// TODO: Wrap this code in abstract factory
const personMethodsToProps = swapiService => ({
  getData: swapiService.getPerson
});

const planetMethodsToProps = swapiService => ({
  getData: swapiService.getPlanet
});

const starshipMethodsToProps = swapiService => ({
  getData: swapiService.getStarship
});

const filmMethodsToProps = swapiService => ({
  getData: swapiService.getFilm
});

const specieMethodsToProps = swapiService => ({
  getData: swapiService.getSpecie
});

const vehicleMethodsToProps = swapiService => ({
  getData: swapiService.getVehicle
});

const personDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItem field="height" label="Height" />
      <ListItem field="mass" label="Mass" />
      <ListItem field="hairColor" label="Hair Color" />
      <ListItem field="skinColor" label="Skin Color" />
      <ListItem field="eyeColor" label="Eye Color" />
      <ListItem field="birthYear" label="Birth Year" />
      <ListItem field="gender" label="Gender" />
    </ItemDetails>
  );
};

const planetDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItem field="name" label="Name" />
      <ListItem field="diameter" label="Diameter" />
      <ListItem field="population" label="Population" />
      <ListItem field="rotationPeriod" label="Rotation Period" />
      <ListItem field="orbitalPeriod" label="Orbital Period" />
      <ListItem field="climate" label="Climate" />
      <ListItem field="gravity" label="Gravity" />
      <ListItem field="surfaceWater" label="Surface Water" />
      <ListItem size="full" field="terrain" label="Terrain" />
    </ItemDetails>
  );
};

const starshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItem field="name" label="Name" />
      <ListItem field="mglt" label="MGLT" />
      <ListItem field="cargoCapacity" label="Cargo Capacity" />
      <ListItem field="consumables" label="Consumables" />
      <ListItem field="costInCredits" label="Cost In Credits" />
      <ListItem field="crew" label="Crew" />
      <ListItem field="hyperdriveRating" label="Hyperdrive Rating" />
      <ListItem field="length" label="Length" />
      <ListItem field="passengers" label="Passengers" />
      <ListItem size="full" field="manufacturer" label="Manufacturer" />
      <ListItem size="full" field="model" label="Model" />
      <ListItem size="full" field="maxAtmospheringSpeed" label="Max Atmosphering Speed" />
    </ItemDetails>
  );
};

const filmDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItemDesc field="openingCrawl" label="Opening Crawl" />
      <ListItem field="episodeId" label="Episode" />
      <ListItem field="director" label="Director" />
      <ListItem field="producer" label="Producer" />
      <ListItem field="releaseDate" label="Release Date" />
    </ItemDetails>
  );
};

const specieDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItem field="name" label="Name" />
      <ListItem field="classification" label="Classification" />
      <ListItem field="designation" label="Designation" />
      <ListItem field="averageHeight" label="Average Height" />
      <ListItem field="skinColors" label="Skin Colors" />
      <ListItem field="hairColors" label="Hair Colors" />
      <ListItem field="eyeColors" label="Eye Colors" />
      <ListItem field="averageLifespan" label="Average Lifespan" />
      <ListItem field="language" label="Language" />
      {/* <ListItem field="homeworld" label="Homeworld" /> */}
    </ItemDetails>
  );
};

const vehicleDetails = props => {
  return (
    <ItemDetails {...props}>
      <ListItem field="name" label="Name" />
      <ListItem field="model" label="model" />
      <ListItem field="manufacturer" label="manufacturer" />
      <ListItem field="costInCredits" label="costInCredits" />
      <ListItem field="length" label="length" />
      <ListItem field="maxAtmospheringSpeed" label="maxAtmospheringSpeed" />
      <ListItem field="crew" label="crew" />
      <ListItem field="passengers" label="passengers" />
      <ListItem field="cargoCapacity" label="cargoCapacity" />
      <ListItem field="vehicleClass" label="vehicleClass" />
      <ListItem field="consumables" label="consumables" />
    </ItemDetails>
  );
};

const PersonDetails = withSwapiService(personMethodsToProps)(personDetails);
const PlanetDetails = withSwapiService(planetMethodsToProps)(planetDetails);
const StarshipDetails = withSwapiService(starshipMethodsToProps)(starshipDetails);
const FilmDetails = withSwapiService(filmMethodsToProps)(filmDetails);
const SpecieDetails = withSwapiService(specieMethodsToProps)(specieDetails);
const VehicleDetails = withSwapiService(vehicleMethodsToProps)(vehicleDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  FilmDetails,
  SpecieDetails,
  VehicleDetails
};

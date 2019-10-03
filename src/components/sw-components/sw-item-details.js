import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const personMethodsToProps = swapiService => ({
  getData: swapiService.getPerson
});

const personDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
      <Record field="hairColor" label="Hair Color" />
      <Record field="skinColor" label="Skin Color" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
};

const planetMethodsToProps = swapiService => ({
  getData: swapiService.getPlanet
});

const planetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Name" />
      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="orbitalPeriod" label="Orbital Period" />
      <Record field="climate" label="Climate" />
      <Record field="gravity" label="Gravity" />
      <Record field="terrain" label="Terrain" />
      <Record field="surfaceWater" label="Surface Water" />
    </ItemDetails>
  );
};

const starshipMethodsToProps = swapiService => ({
  getData: swapiService.getStarship
});

const starshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="mglt" label="MGLT" />
      <Record field="cargoCapacity" label="Cargo Capacity" />
      <Record field="consumables" label="Consumables" />
      <Record field="costInCredits" label="Cost In Credits" />
      <Record field="created" label="Created" />
      <Record field="crew" label="Crew" />
      <Record field="edited" label="Edited" />
      <Record field="hyperdriveRating" label="Hyperdrive Rating" />
      <Record field="length" label="Length" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="maxAtmospheringSpeed" label="Max Atmosphering Speed" />
      <Record field="model" label="Model" />
      <Record field="name" label="Name" />
      <Record field="passengers" label="Passengers" />
    </ItemDetails>
  );
};

const PersonDetails = withSwapiService(personMethodsToProps)(personDetails);
const PlanetDetails = withSwapiService(planetMethodsToProps)(planetDetails);
const StarshipDetails = withSwapiService(starshipMethodsToProps)(
  starshipDetails
);

export { PersonDetails, PlanetDetails, StarshipDetails };

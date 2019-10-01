import React from "react";

import ItemDetails, { Record } from "../item-details";
import { viewWithSwapiService } from "../hoc-helpers";

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

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson
});

const PersonDetails = viewWithSwapiService(mapMethodsToProps)(personDetails);

export { PersonDetails };

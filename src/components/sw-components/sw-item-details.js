import React from "react";

import ItemDetails, { Record } from "../item-details";
import { viewWithSwapiService } from "../hoc-helpers";

const personDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson
});

const PersonDetails = viewWithSwapiService(mapMethodsToProps)(personDetails);

export { PersonDetails };

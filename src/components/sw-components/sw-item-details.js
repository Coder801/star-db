import React from "react";

import ItemDetails, { Record } from "../item-details";
import { viewWithSwapiService } from "../hoc-helpers";

const personDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson
});

const PersonDetails = viewWithSwapiService(personDetails, mapMethodsToProps);

export { PersonDetails };

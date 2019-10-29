import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { PlanetsList } from "../../sw-components";
import { CATEGORIES } from "../../../constants";

const { planets } = CATEGORIES;

const PlanetsPage = ({ history }) => {
  return (
    <PlanetsList
      onSelect={id => {
        const newPath = `${planets.route}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

PlanetsPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PlanetsPage);

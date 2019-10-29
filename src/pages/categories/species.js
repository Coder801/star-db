import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { SpeciesList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

const { species } = CATEGORIES;

const SpeciesPage = ({ history }) => {
  return (
    <SpeciesList
      onSelect={id => {
        const newPath = `${species.route}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

SpeciesPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(SpeciesPage);

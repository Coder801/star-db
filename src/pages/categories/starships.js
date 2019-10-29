import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { StarshipsList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

const { starships } = CATEGORIES;

const StarshipPage = ({ history }) => {
  return (
    <StarshipsList
      onSelect={id => {
        const newPath = `${starships.route}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

StarshipPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(StarshipPage);

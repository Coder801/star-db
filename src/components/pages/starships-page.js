import React from "react";
import PropTypes from "prop-types";

import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onSelect={id => {
        const newPath = `/planets/${id}`;
        history.push(newPath);
      }}
    />
  );
};

StarshipPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(StarshipPage);

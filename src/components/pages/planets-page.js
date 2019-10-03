import React from "react";
import PropTypes from "prop-types";

import { PlanetList } from "../sw-components";
import { withRouter } from "react-router-dom";

const PlanetPage = ({ history }) => {
  return (
    <PlanetList
      onSelect={id => {
        const newPath = `/planets/${id}`;
        history.push(newPath);
      }}
    />
  );
};

PlanetPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PlanetPage);
